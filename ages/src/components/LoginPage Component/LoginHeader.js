import React from "react";
import LogoutButton from "../ConstantComponent/LogoutButton";

const LoginHeader = () => {
  
  return (
    <div>      
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
              <h1>Login</h1>
            </a>
          </div>
        </div>
        <LogoutButton/>
      </nav>
    </div>
  );
};

export default LoginHeader;
