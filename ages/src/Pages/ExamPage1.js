import React from "react";
import ExamPage1Header from "../components/ConstantComponent/Exam/Exam Page 1/ExamPage1Header";
import ExamPage1Content from "../components/ConstantComponent/Exam/Exam Page 1/ExamPage1Content";

const ExamPage1 = ({ lv1Urls }) => {
  return (
    <div>
      <ExamPage1Header />
      <ExamPage1Content lv1Urls={lv1Urls} />
    </div>
  );
};

export default ExamPage1;
