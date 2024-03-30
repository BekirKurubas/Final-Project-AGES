import React from "react";
import ExamRow from "./ExamRow";
import LevelB1Row from "./LevelB1Row";
import WhyTelcRow from "./WhyTelcRow";

const TelcContent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <ExamRow />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <LevelB1Row />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <WhyTelcRow />
        </div>
      </div>
    </>
  );
};

export default TelcContent;
