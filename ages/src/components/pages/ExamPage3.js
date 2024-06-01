import React from "react";
import ExamPage3Header from "../exam/exam-page-3/ExamPage3Header";
import ExamPage3Content from "../exam/exam-page-3/ExamPage3Content";

const ExamPage3 = ({ lv3Urls }) => {
  return (
    <div>
      <ExamPage3Header />
      <ExamPage3Content lv3Urls={lv3Urls} />
    </div>
  );
};

export default ExamPage3;