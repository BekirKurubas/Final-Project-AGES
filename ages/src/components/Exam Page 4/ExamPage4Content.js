import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const ExamPage4Content = ({ sb1Urls = [], startTimer }) => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const storedOptions = localStorage.getItem("selectedOptions");
    return storedOptions ? JSON.parse(storedOptions) : Array(10).fill(null);
  });

  const [dropdownOpen, setDropdownOpen] = useState(Array(10).fill(false));
  const [remainingTime, setRemainingTime] = useState(() => {
    const storedTime = localStorage.getItem("remainingTime");
    return storedTime ? parseInt(storedTime) : 5400;
  });
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setTimerRunning(false);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timerRunning]);

  useEffect(() => {
    if (!timerRunning && remainingTime > 0) {
      setTimerRunning(true);
    }
  }, [remainingTime, timerRunning]);

  useEffect(() => {
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const toggleDropdown = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
  };

  const handleOptionSelect = (option, index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = updatedOptions[index] === option ? null : option;
    setSelectedOptions(updatedOptions);
  };

  const dropdownOptions = ["a", "b", "c"];

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

  

  return (
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
  {sb1Urls.map((url, index) => (
    <img
      key={index}
      src={url}
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
              <h4 style={{ marginRight: "10px" }}>{[index + 21]}</h4>
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
          <Link to="/exam-page-2" style={{ color: "white" }}>
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
              <h4>Back to Exam Page 3</h4>
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
              <h4>Continue to Exam Page 5</h4>
            </Button>
          </Link>

          <br />
        </div>
      </div>
    </div>
  );
};

export default ExamPage4Content;
