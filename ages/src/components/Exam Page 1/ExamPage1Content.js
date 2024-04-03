import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const ExamPage1Content = ({ lv1Urls, startTimer }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null));
  const [dropdownOpen, setDropdownOpen] = useState(Array(5).fill(false));
  const [remainingTime, setRemainingTime] = useState(5400); // 90 dakika
  const [timerRunning, setTimerRunning] = useState(false);
  const navigate = useNavigate();

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

  const handleContinueToExamPage2 = () => {
    navigate("/exam-page-2");
  };

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
        {formatTime(remainingTime)}
      </div>

      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
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
              <h4 style={{ marginRight: "10px" }}>{index + 1})</h4>
              <Dropdown
                isOpen={dropdownOpen[index]}
                toggle={() => toggleDropdown(index)}
                className="custom-dropdown"
              >
                <DropdownToggle caret style={{ backgroundColor: "#FF0000" }}>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  {dropdownOptions.map((option) => (
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
            onClick={handleContinueToExamPage2}
          >
            <h4>Continue to Exam Page 2</h4>
          </Button>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default ExamPage1Content;
