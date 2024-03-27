import React from "react";
import { Link } from "react-router-dom";

const LoginRegisterContent = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <div
          className="col-md-6 mb-4"
          style={{ backgroundColor: "white", padding: "20px" }}
        >
          <h4
            style={{
              textAlign: "center",
              marginTop: "60px",
              marginBottom: "20px",
            }}
          >
            Try Your German Knowledge!
          </h4>
          <br />
          <div className="row">
            <div className="col-md-6">
              <Link to="/login" style={{ color: "white" }}>
                <button
                  className="btn btn-primary btn-lg"
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    backgroundColor: "red",
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/register" style={{ color: "white" }}>
                <button
                  className="btn btn-primary btn-lg"
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    backgroundColor: "red",
                  }}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="row">
            <div style={{ padding: "20px" }}>
              <img
                src="https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/telc_girl.jpg"
                alt="telc-girl"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterContent;
