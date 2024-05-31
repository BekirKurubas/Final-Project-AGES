import React, { useState, useEffect, useRef } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { fetchImage } from "../../utils/fetchImage";

const ExamPage5Content = ({ sb2Urls = [], startTimer }) => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const storedOptions = localStorage.getItem("selectedOptions5");
    return storedOptions ? JSON.parse(storedOptions) : Array(10).fill(null);
  });

  const [dropdownOpen, setDropdownOpen] = useState(Array(10).fill(false));
  const [remainingTime, setRemainingTime] = useState(() => {
    const storedTime = localStorage.getItem("remainingTime");
    return storedTime ? parseInt(storedTime, 10) : 5400;
  });
  const [timerRunning, setTimerRunning] = useState(false);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const pageNumber = 5
  const intervalRef = useRef(null);
  const [img, setImg] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const img = await fetchImage('sb1_page-0001.jpeg');
      setImg(img);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (timerRunning) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setTimerRunning(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [timerRunning]);

  useEffect(() => {
    if (!timerRunning && remainingTime > 0) {
      setTimerRunning(true);
    }
  }, [remainingTime, timerRunning]);

  useEffect(() => {
    localStorage.setItem("selectedOptions5", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  useEffect(() => {
    localStorage.setItem("remainingTime", remainingTime);
  }, [remainingTime]);

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => {
      const updatedDropdownOpen = [...prev];
      updatedDropdownOpen[index] = !updatedDropdownOpen[index];
      return updatedDropdownOpen;
    });
  };

  const handleOptionSelect = (option, index) => {
    setSelectedOptions((prevOptions) => {
      if (!prevOptions.includes(option)) {
        const updatedOptions = [...prevOptions];
        updatedOptions[index] = option;
        localStorage.setItem("selectedOptions5", JSON.stringify(updatedOptions));
        return updatedOptions;
      }
      return prevOptions;
    });
  };

  const dropdownOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const storedTime = localStorage.getItem("remainingTime");
    if (storedTime) {
      setRemainingTime(parseInt(storedTime));
      setTimerRunning(true);
    }
  }, []);

  useEffect(() => {
    if (timerRunning) {
      localStorage.setItem("remainingTime", remainingTime.toString());
    }
  }, [remainingTime, timerRunning]);

  const fetchSavedAnswers = async () => {
    try {
      localStorage.removeItem("selectedOptions")

      const token = await getAccessTokenSilently();
      const examId = sessionStorage.getItem("examId");
      if (!!examId) {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page/${pageNumber}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.length === 0) return;
          const savedAnswers = data.map((d) => { return d.answer });
          setSelectedOptions((prevOptions) => {
            const updatedOptions = [...prevOptions];
            savedAnswers.forEach((answer, index) => {
              updatedOptions[index] = answer;
            });
            localStorage.setItem("selectedOptions5", JSON.stringify(updatedOptions));
            return updatedOptions;
          });
        } else {
          console.error('Failed to fetch saved answers');
        }
      }
    } catch (error) {
      console.error('Error fetching saved answers:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSavedAnswers();
    }
  }, [isAuthenticated, getAccessTokenSilently]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log(selectedOptions);

      const token = await getAccessTokenSilently();
      const examId = sessionStorage.getItem("examId");

      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          pageNumber: pageNumber,
          answers:
            selectedOptions.map((sO, index) => { return { answerNumber: index + 1, answer: sO } })

        })
      });
      console.log(response)
      if (response.ok) {
        localStorage.removeItem("selectedOptions5")

        const responseFinisheExam = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/finish`, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
            // Add any additional headers if needed
          }
        });

        if (responseFinisheExam.ok) {
          localStorage.removeItem("selectedOptions5")

          navigate(`/result-page`);
        }



      } else {
        console.log(response)
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };


  return (
    isAuthenticated ? (
      <div>
        <div
          style={{
            position: "fixed",
            top: "100px",
            right: 0,
            padding: "10px",
            backgroundColor: "#FF0000",
            color: "#fff",
            fontWeight: "bold",
            width: "110px",
          }}
        >
          Time{"  "}
          {!timerRunning ? (
            <Button color="primary" onClick={() => startTimer(90 * 60)}>
              Start Exam
            </Button>
          ) : (
            formatTime(remainingTime)
          )}
        </div>

        <div style={{ marginTop: "100px", marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
              maxWidth: "130%"
            }}
          >
            {[img].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Full Screen ${index}`}
                style={{ width: "60%", height: "auto", maxWidth: "60%" }}
              />
            ))}
          </div>

          <div
            className="d-flex p-5 "
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="mr-3 mb-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "50px",
                  marginTop: "60px",
                }}
              >
                <h4 style={{ marginRight: "10px" }}>{[index + 31]}</h4>
                <Dropdown
                  isOpen={dropdownOpen[index]}
                  toggle={() => toggleDropdown(index)}
                  className="custom-dropdown"
                >
                  <DropdownToggle caret style={{ backgroundColor: "#FF0000" }}>
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    {dropdownOptions.map((option, i) => (
                      <DropdownItem
                        key={option}
                        onClick={() => handleOptionSelect(option, index)}
                        disabled={selectedOptions[index] === option}
                      >
                        <span>
                          <b>Answer : {option}</b>
                        </span>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <span style={{ marginLeft: "10px" }}>
                  <b>Answer : ({selectedOptions[index]})</b>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link to="/exam-page-4" style={{ color: "white" }}>
              <Button
                style={{
                  backgroundColor: "#FF0000",
                  width: "300px",
                  height: "100px",
                  marginRight: "25px",
                  marginTop: "80px",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                <h4>Back to Exam Page 4</h4>
              </Button>
            </Link>
            <br />
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#FF0000",
                width: "150px",
                height: "150px",
                marginRight: "25px",
                marginTop: "80px",
                marginBottom: "40px",
                position: "relative",
                borderRadius: "50%"
              }}
            >
              <h4>Finish Exam</h4>
            </Button>

            <br />
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                style={{
                  paddingTop: "80px",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                  marginLeft: "40px",
                }}
              >
                <h3 style={{ marginBottom: "25px" }}>
                  <b>You have to be logged in to start the exam</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ExamPage5Content;
