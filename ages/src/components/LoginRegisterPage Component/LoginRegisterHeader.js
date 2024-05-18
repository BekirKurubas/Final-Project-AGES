import React from "react";

const LoginRegisterHeader = () => {
  
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
      </nav>
    </div>
  );
};

export default LoginRegisterHeader;
