import React from "react";

const ExamPage3Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#FF0000",
          maxWidth: "100%",
          height: "auto",
          padding: "0",
          marginBottom: "10px",
        }}
      >
        <div className="container-fluid">
          <div className="navbar-text mx-auto">
            <a
              className="nav-link active"
              aria-current="page"
              href="/exam-page-2"
              style={{ color: "#FFFFFF" }}
            >
              <h1>EXAM PAGE -3-</h1>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ExamPage3Header;
