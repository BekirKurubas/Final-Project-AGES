import React from "react";

const Telcheader = () => {  

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
              href="/Telc"
              style={{ color: "#FFFFFF" }}
            >
              <h1>TELC</h1>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Telcheader;
