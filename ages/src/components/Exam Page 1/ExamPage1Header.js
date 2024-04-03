import React from "react";

const ExamPage1Header = () => {
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
            <div
              className="nav-link active"
              aria-current="page"
              style={{ color: "#FFFFFF" }}
            >
              <h1>EXAM PAGE -1-</h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ExamPage1Header;
