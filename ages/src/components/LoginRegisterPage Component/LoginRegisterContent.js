import React from "react";
import LoginregisterButtons from "./LoginRegisterButtons";
import LoginRegisterPicture from "./LoginRegisterPicture";

const LoginRegisterContent = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <LoginregisterButtons />
        <LoginRegisterPicture />
      </div>
    </div>
  );
};

export default LoginRegisterContent;
