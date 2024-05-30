import React from "react";
import ExamPage2Header from "../exam/exam-page-2/ExamPage2Header";
import ExamPage2Content from "../exam/exam-page-2/ExamPage2Content";

const ExamPage2 = ({ lv2Urls }) => {
  return (
    <div>
      <ExamPage2Header />
      <ExamPage2Content lv2Urls={lv2Urls} />
    </div>
  );
};

export default ExamPage2;
