import React from "react";
import ExamRow from "./ExamRow";

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
          <div className="col-md-6 mb-5">
            <div style={{ padding: "20px" }}>
              <img
                src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/three-friend.jpg"
                alt="Three-friend"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div
              style={{
                padding: "10px",
                fontSize: "13px",
                whiteSpace: "pre-line",
              }}
            >
              <h1>The CEFR level B1</h1>
              <br />
              <p>
                Learners at B1 level can communicate in a simple and coherent
                way in daily life, at work, and when travelling write or speak
                about a range of topics in their own area of interest.
                participate in conversations about family, hobbies, work, and
                current events, reporting experiences, describing goals, and
                giving reasons for opinions. generally use grammar and language
                correctly. understand and produce simple, connected texts on
                familiar topics.
              </p>
            </div>
          </div>
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
