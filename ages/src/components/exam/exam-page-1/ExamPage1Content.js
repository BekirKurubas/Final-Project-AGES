import React, { useState, useEffect, useRef } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { fetchImage } from "../../utils/fetchImage";

const ExamPage1Content = ({ startTimer }) => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const storedOptions = localStorage.getItem("selectedOptions");
    return storedOptions ? JSON.parse(storedOptions) : Array(5).fill(null);
  });

  const [dropdownOpen, setDropdownOpen] = useState(Array(5).fill(false));
  const [remainingTime, setRemainingTime] = useState(() => {
    const storedTime = localStorage.getItem("remainingTime");
    return storedTime ? parseInt(storedTime, 10) : 5400;
  });
  const [timerRunning, setTimerRunning] = useState(false);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const pageNumber = 1;
  const intervalRef = useRef(null);
  const [img1, setImg1] = useState([]);
  const [img2, setImg2] = useState([]);

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
    const fetchImages = async () => {
      const img1 = await fetchImage('lv1-1_page-0001.jpg');
      const img2 = await fetchImage('lv1-2_page-0001.jpg');
      setImg1(img1);
      setImg2(img2);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (!timerRunning && remainingTime > 0) {
      setTimerRunning(true);
    }
  }, [remainingTime, timerRunning]);

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
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = option;
      localStorage.setItem("selectedOptions", JSON.stringify(updatedOptions));
      return updatedOptions;
    });
  };

  const dropdownOptions = Array.from({ length: 10 }, (_, index) =>
    String.fromCharCode(97 + index)
  );

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const fetchSavedAnswers = async () => {
    try {
      localStorage.removeItem("selectedOptions");

      const token = await getAccessTokenSilently();
      const examId = sessionStorage.getItem("examId");
      if (examId) {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page/${pageNumber}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.length === 0) return;
          const savedAnswers = data.map((d) => d.answer);
          setSelectedOptions(savedAnswers);
          localStorage.setItem("selectedOptions", JSON.stringify(savedAnswers));
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
      const token = await getAccessTokenSilently();
      const examId = sessionStorage.getItem("examId");

      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/page`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          pageNumber: pageNumber,
          answers: selectedOptions.map((sO, index) => ({ answerNumber: index + 1, answer: sO }))
        })
      });

      if (response.ok) {
        localStorage.removeItem("selectedOptions");
        navigate(`/exam-page-${pageNumber + 1}`);
      } else {
        console.error('Failed to submit answers');
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const isOptionDisabled = (option) => {
    return selectedOptions.includes(option);
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
          {formatTime(remainingTime)}
        </div>

        <div style={{ marginTop: "100px", marginBottom: "50px" }}>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {[img1, img2].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Full Screen ${index}`}
                style={{ width: "50%", height: "auto", maxWidth: "50%" }}
              />
            ))}
          </div>
          <div className="d-flex p-5" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="mr-3 mb-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "40px",
                  marginTop: "50px",
                }}
              >
                <h4 style={{ marginRight: "10px" }}>{index + 1}</h4>
                <Dropdown
                  isOpen={dropdownOpen[index]}
                  toggle={() => toggleDropdown(index)}
                  className="
                  custom-dropdown"
                >
                  <DropdownToggle caret style={{ backgroundColor: "#FF0000" }}>
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    {dropdownOptions.map((option) => (
                      <DropdownItem
                        key={option}
                        onClick={() => handleOptionSelect(option, index)}
                        disabled={isOptionDisabled(option)}
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
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Button
            type="submit"
            onClick={handleSubmit}
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
            <h4>Continue to Exam Page 2</h4>
          </Button>
          <br />
        </div>
      </div>) : (
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
}

export default ExamPage1Content;