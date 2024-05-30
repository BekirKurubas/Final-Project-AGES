import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); // State for confirmation dialog
  const { isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const [showFinishExamButton, setShowFinishExamButton] = useState(false);
  const [showHeaderButtons, setShowHeaderButtons] = useState(true); // State to manage the visibility of header buttons

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
    // Hide header buttons when "Finish Exam" button is visible
    setShowHeaderButtons(!examPages.includes(location.pathname));
  }, [location]);

  const handleFinishExamClick = () => {
    setShowConfirmationDialog(true);
  };

  const handleContinueTest = () => {
    setShowConfirmationDialog(false);
  };

  const handleFinishTest = async () => {
    try {
      const token = await getAccessTokenSilently();
      const examId = sessionStorage.getItem('examId');
      const responseFinishExam = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam/${examId}/finish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      if (responseFinishExam.ok) {
        localStorage.removeItem("selectedOptions");
        localStorage.removeItem("selectedOptions5");
        setShowConfirmationDialog(false);  // Hide the confirmation dialog
        navigate(`/result-page`);
      } else {
        console.error("Failed to finish the exam");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container-fluid">
        {showHeaderButtons && (
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
        )}
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu && "show"}`}>
          <ul className="navbar-nav ms-auto">
            {showHeaderButtons && (
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
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  {!showFinishExamButton && (
                    <button
                      className="nav-link btn btn-primary me-2"
                      onClick={() => navigate("/exam-page-1")}
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
                      type="button"
                      onClick={handleFinishExamClick}
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

      {showConfirmationDialog && (
        <div className="confirmation-dialog">
          <div className="confirmation-content">
            <p>Are you sure to finish model test?</p>
            <div className="confirmation-buttons">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "blue", color: "white", marginRight: "10px" }}
                onClick={handleContinueTest}
              >
                Continue the model test
              </button>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={handleFinishTest}
              >
                Finish the model test
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .confirmation-dialog {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .confirmation-content {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          width: 400px;
        }
        .confirmation-buttons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </nav>
  );
};

export default Header;
