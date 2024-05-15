import React from "react";
import StartExamPageHeader from "../components/StartExam Component/StartExamPageHeader";
import StartExamPageContent from "../components/StartExam Component/StartExamPageContent";
import Footer from "../components/ConstantComponent/Footer";

const StartExamPage = ({ startTimer }) => {
  return (
    <div>
      <StartExamPageHeader />
      <StartExamPageContent startTimer={startTimer} />
      <Footer />
    </div>
  );
};

export default StartExamPage;
