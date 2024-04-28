import React from "react";

const StartExamPageHeader = () => {

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#FF0000",
          maxWidth: "100%",
          height: "auto",
          padding: "0",
        }}
      >
        <div className="container-fluid">
          <div className="navbar-text mx-auto">
            <a
              className="nav-link active"
              aria-current="page"
              href="/start-exam"
              style={{ color: "#FFFFFF" }}
            >
              <h1>Start Exam</h1>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default StartExamPageHeader;
