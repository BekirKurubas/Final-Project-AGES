import React from "react";

const LoginPageHeader = () => {
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
              href="/login"
              style={{ color: "#FFFFFF" }}
            >
              <h1>Login</h1>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoginPageHeader;
