import React from "react";
import StartExamPageHeader from "../components/StartExam Component/StartExamPageHeader";
import StartExamPageContent from "../components/StartExam Component/StartExamPageContent";

const StartExamPage = ({ startTimer }) => {
  return (
    <div>
      <StartExamPageHeader />
      <StartExamPageContent startTimer={startTimer} />
    </div>
  );
};

export default StartExamPage;
