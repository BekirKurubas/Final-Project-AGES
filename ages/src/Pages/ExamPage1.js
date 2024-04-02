import React from "react";
import ExamPage1Header from "../components/Exam Page 1/ExamPage1Header";
import ExamPage1Content from "../components/Exam Page 1/ExamPage1Content";
import Footer from "../components/ConstantComponent/Footer";

const ExamPage1 = ({ lv1Urls }) => {
  return (
    <div>
      <ExamPage1Header />
      <ExamPage1Content lv1Urls={lv1Urls} />
      <Footer />
    </div>
  );
};

export default ExamPage1;
