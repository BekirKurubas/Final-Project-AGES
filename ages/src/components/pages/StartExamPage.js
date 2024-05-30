import React from "react";
import StartExamPageHeader from "../start-exam/StartExamPageHeader";
import StartExamPageContent from "../start-exam/StartExamPageContent";

const StartExamPage = ({ startTimer }) => {
  return (
    <div>
      <StartExamPageHeader />
      <StartExamPageContent startTimer={startTimer} />   
    </div>
  );
};

export default StartExamPage;
