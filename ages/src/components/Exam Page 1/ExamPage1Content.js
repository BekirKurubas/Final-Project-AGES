import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const ExamPage1 = ({ lv1Urls, startTimer }) => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const storedOptions = localStorage.getItem("selectedOptions");
    return storedOptions ? JSON.parse(storedOptions) : Array(5).fill(null);
  });

  const [dropdownOpen, setDropdownOpen] = useState(Array(5).fill(false));
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
    if (!selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions];
      updatedOptions[index] = option;
      setSelectedOptions(updatedOptions);
    }
  };

  const dropdownOptions = Array.from({ length: 10 }, (_, index) =>
    String.fromCharCode(97 + index)
  );

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
      <div className="countdown-timer">
        {!timerRunning ? (
          <Button color="primary" onClick={() => startTimer(90 * 60)}>
            Start Exam
          </Button>
        ) : (
          formatTime(remainingTime)
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {lv1Urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Full Screen ${index}`}
            style={{ width: "50%", height: "auto", maxWidth: "50%" }}
          />
        ))}
      </div>
      <div
        className="d-flex p-5"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
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
            <h4 style={{ marginRight: "10px" }}>{[index + 1]})</h4>
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
              <b>Answer : ( {selectedOptions[index]} )</b>
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
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
            <h4>Continue to Exam Page 2</h4>
          </Button>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default ExamPage1;
