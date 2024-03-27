import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginRegisterHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-white justify-content-between">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <FaHome /> AGES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Telc">
                  What is TELC Language Test ?
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/login-register"
                  className="nav-link btn btn-primary btn-lg"
                >
                  Let's try Model Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-md"
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
              href="/login-register"
              style={{ color: "#FFFFFF" }}
            >
              <h1>Login / Register</h1>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoginRegisterHeader;
