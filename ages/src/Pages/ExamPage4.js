import React from "react";
import ExamPage4Header from "../components/Exam Page 4/ExamPage4Header";
import ExamPage4Content from "../components/Exam Page 4/ExamPage4Content"

const ExamPage4 = ({ sb1Urls }) => {
  return (
    <div>
      <ExamPage4Header />
      <ExamPage4Content sb1Urls={sb1Urls} />
    </div>
  );
};

export default ExamPage4;
