import React from "react";
import ExamPage5Header from "../exam/exam-page-5/ExamPage5Header";
import ExamPage5Content from "../exam/exam-page-5/ExamPage5Content";

const ExamPage5 = ({ sb2Urls }) => {
  return (
    <div>
      <ExamPage5Header />
      <ExamPage5Content sb2Urls={sb2Urls} />
    </div>
  );
};

export default ExamPage5;
