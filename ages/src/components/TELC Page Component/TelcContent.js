import React from "react";
import ExamRow from "./ExamRow";
import LevelB1Row from "./LevelB1Row";

const TelcContent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <ExamRow />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <LevelB1Row />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mb-5">
            <div
              style={{
                padding: "10px",
                fontSize: "12px",
                whiteSpace: "pre-line",
                marginTop: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                }}
              >
                Why to be choosed <br /> a Telc language test?
              </h1>
              <br />
              <p>
                Telc language tests are recognised worldwide by schools,
                universities, employers and government authorities as valid
                proof of language proficiency at all six levels of the Common
                European Framework of Reference for Languages (CEFR). As a full
                member of ALTE (Association of Language Testers in Europe), telc
                is committed to complying with international quality standards.
                Regular audits are carried out to ensure we meet these
                standards.
                <br />
                <br />
                To learn more about TELC German Exams, please click{" "}
                <span>
                  <a
                    href="https://www.telc.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="row">
              <div style={{ padding: "20px" }}>
                <img
                  src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/smile.jpg"
                  alt="smile"
                  style={{ width: "100%", height: "280px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelcContent;
