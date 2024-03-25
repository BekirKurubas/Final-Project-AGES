import React from "react";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white justify-content-between">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <FaHome /> AGES
          </a>
          <div className="navbar-text">
            <a
              className="nav-link active"
              aria-current="page"
              href="/language-test"
            >
              TELC Language Test
            </a>
          </div>
          <div className="navbar-text">
            <a
              className="nav-link active"
              aria-current="page"
              href="/model-test"
            >
              Let's Try Model Test
            </a>
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
              href="/language-test"
              style={{ color: "#FFFFFF" }}
            >
              <h1>AGES</h1>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
