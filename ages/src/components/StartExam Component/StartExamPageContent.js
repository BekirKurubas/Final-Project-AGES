import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const StartExamPageContent = ({ startTimer }) => {
  const handleStartExam = () => {
    // Zamanlayıcıyı başlatmak için startTimer fonksiyonunu çağır
    startTimer();
  };

  return (
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
            <div className="col-md-12 text-center mt-3">
              <Link to="/exam-page-1" style={{ color: "white" }}>
                <Button
                  color="danger"
                  size="lg"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginBottom: "20px",
                  }}
                  onClick={handleStartExam}
                >
                  <span style={{ color: "white" }}>START</span>
                </Button>
              </Link>
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
                <img
                  src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/b1_low.png"
                  alt="b1exam"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartExamPageContent;
