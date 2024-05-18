import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="col-md-6 mb-5 d-flex justify-content-center align-items-center">
      <div
        style={{
          padding: "10px",
          fontSize: "12px",
          whiteSpace: "pre-line",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "3em" }}>Try Your German Knowledge!</p>

        {!isAuthenticated && (
          <button
            onClick={() => loginWithRedirect()}
            className="btn btn-primary"
            style={{
              marginTop: "50px",
              width: "220px",
              backgroundColor: "red",
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginButton;
