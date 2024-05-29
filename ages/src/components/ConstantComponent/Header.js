import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const [showFinishExamButton, setShowFinishExamButton] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  useEffect(() => {
    const examPages = [
      "/exam-page-1",
      "/exam-page-2",
      "/exam-page-3",
      "/exam-page-4",
      "/exam-page-5"
    ];

    setShowFinishExamButton(examPages.includes(location.pathname));
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
                  {!showFinishExamButton && (
                    <button
                      className="nav-link btn btn-primary me-2"
                      onClick={() => navigate("/start-exam")}
                      style={{
                        backgroundColor: "white",
                        borderWidth: "2px",
                        borderStyle: "solid",
                      }}
                    >
                      <b>Start Exam</b>
                    </button>
                  )}
                  {showFinishExamButton && (
                    <button
                      className="nav-link btn btn-primary me-2"
                      onClick={() => navigate("/result-page")}
                      style={{
                        backgroundColor: "white",
                        borderWidth: "2px",
                        borderStyle: "solid",
                      }}
                    >
                      <b>Finish Exam</b>
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
                  to="/login"
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
