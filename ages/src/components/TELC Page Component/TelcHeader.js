import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Telcheader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white justify-content-between">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <FaHome /> AGES
          </a>
          <div className="navbar-text">
            <a className="nav-link active" aria-current="page" href="/Telc">
              What is TELC Language Test ?
            </a>
          </div>
          <div className="text-center" style={{ marginBottom: "20px" }}>
            <Link to="/login-register" className="btn btn-primary">
              Let's try Model Test
            </Link>
          </div>
        </div>
      </nav>
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
    </div>
  );
};

export default Telcheader;
