import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-md bg-white justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <FaHome /> <b>AGES</b>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu && "show"}`}>
          <div className="d-md-flex justify-content-md-center align-items-md-center flex-md-grow-1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/Telc"
                  className="nav-link btn btn-primary"
                  style={{
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "";
                  }}
                >
                  <b>What is TELC Language Test ?</b>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/login-register"
                  className="nav-link btn btn-primary"
                  style={{
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = ""; // İçindeki yazı rengini tekrar orijinal haline dönüştür
                  }}
                >
                  <b>Let's try Model Test</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
