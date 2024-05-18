import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showStartExamButton, setShowStartExamButton] = useState(true); // State to manage the visibility of the Start Exam button
  const { isAuthenticated, logout } = useAuth0(); // Getting authentication status and logout function
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleStartExamClick = () => {
    setShowStartExamButton(false); // Hide the button when clicked
    navigate("/start-exam"); // Programmatically navigate to "/start-exam" page
  };

  useEffect(() => {
    // Show the button on the home page and /Telc page
    if (location.pathname === "/" || location.pathname === "/Telc") {
      setShowStartExamButton(true);
    } else {
      setShowStartExamButton(false);
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container-fluid">
        <Link
          to="/"
          className="nav-link btn btn-primary"
          style={{
            backgroundColor: "white",
            height: "40px",
            paddingLeft: "7px",
            paddingRight: "7px",
            width: "80px",
            borderWidth: "2px",
            borderStyle: "solid",
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "blue";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "";
          }}
        >
          <FaHome style={{ marginRight: "5px" }} />
          <b>AGES</b>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu && "show"}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/Telc"
                className="nav-link btn btn-primary"
                style={{
                  backgroundColor: "white",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "blue";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "";
                }}
              >
                <b>What is TELC Language Test ?</b>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  {showStartExamButton && (
                    <button
                      className="nav-link btn btn-primary me-2"
                      onClick={handleStartExamClick}
                      style={{
                        backgroundColor: "white",
                        borderWidth: "2px",
                        borderStyle: "solid",
                      }}
                    >
                      <b>Start Exam</b>
                    </button>
                  )}
                  <button
                    className="nav-link btn btn-primary"
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "white",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <b>Logout</b>
                  </button>
                </div>
              ) : (
                <Link
                  to="login"
                  className="nav-link btn btn-primary"
                  style={{
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "";
                  }}
                >
                  <b>Let's Try Model Test</b>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
