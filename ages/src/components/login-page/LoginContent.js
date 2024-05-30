import React from "react";
import LoginButton from "./LoginButton";
import LoginPicture from "./LoginPicture";


const LoginContent = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "20px" }}>
      <div className="row">
        <LoginButton />        
        <LoginPicture />
      </div>
    </div>
  );
};

export default LoginContent;









