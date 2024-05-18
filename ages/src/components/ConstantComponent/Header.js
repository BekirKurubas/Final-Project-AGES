import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container-fluid">
        <Link
          to="/"
          className="nav-link btn btn-primary"
          style={{
            backgroundColor: "white",
            height: "40px",
            paddingLeft: "7px",
            paddingRight: "7px",
            width: "80px",
            borderWidth: "2px",
            borderStyle: "solid",
            display: "flex",
            alignItems: "center",
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
          <FaHome style={{ marginRight: "5px" }} />
          <b>AGES</b>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu && "show"}`}>
          <ul className="navbar-nav ms-auto">
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="login-register"
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
                <b>Let's Try Model Test</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
