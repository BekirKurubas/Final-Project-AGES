import React, { useState, useEffect } from 'react';
import { fetchImage } from '../utils/fetchImage';
import { Button } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const StartExamPageContent = ({ startTimer }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [img, setImg] = useState();
  const navigate = useNavigate();

  const handleStartExam = async (e) => {
    localStorage.removeItem("remainingTime");
    localStorage.removeItem("selectedOptions")
    startTimer(90 * 60);
    e.preventDefault();
    console.log("handleSubmit Start Exam")

    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/exam`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
      console.log(response.status)
      if (response.ok) {
        const exam = await response.json()
        sessionStorage.setItem('examId', exam.id);
        navigate('/exam-page-1');
      } else if (response.status === 400 && !!sessionStorage.getItem('examId')) {
        console.log("User already has an exam")
        navigate('/exam-page-1');
      } else {
        navigate('/start-exam');
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };


  useEffect(() => {
    const fetchImages = async () => {
      const img = await fetchImage('b1_low.png');
      setImg(img);
    };

    fetchImages();
  }, []);

  return (
    isAuthenticated ? (
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
                  <b>Please Read Before Start!</b>
                </h3>
                <p>
                  In this exam, there is just “Lesen Verstehen” and
                  “Sprachbausteine” part of Telc B1 German Modeltest. When you
                  start this exam, it will be started 90 minutes time clock. Good
                  Luck !
                </p>
                <h4
                  style={{
                    color: "red",
                    marginTop: "60px",
                    marginBottom: "60px",
                  }}
                >
                  START B1 GERMAN TELC MODEL TEST !
                </h4>
              </div>
              <div className="col-md-12 mt-3">
                <Button
                  color="danger"
                  size="lg"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginBottom: "20px",
                    marginLeft: "220px",                   
                  }}
                  onClick={handleStartExam}
                  type="submit"
                >
                  <span style={{ color: "white" }}>START</span>
                </Button>
              </div>
            </div>
            <div className="col-md-6 mb-4 mt-1">
              <div className="row">
                <div
                  style={{
                    marginTop: "40px",
                    marginRight: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {img ? (
                    <img src={img} alt="Fetched from backend" style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }} />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
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
            <div className="col-md-6 mb-4 mt-1">
              <div className="row">
                <div
                  style={{
                    marginTop: "40px",
                    marginRight: "0px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {
                    <img src={img} alt="Fetched from backend" style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }} />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default StartExamPageContent;
