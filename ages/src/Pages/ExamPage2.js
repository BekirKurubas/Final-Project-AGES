import React from "react";
import ExamPage2Header from "../components/Exam Page 2/ExamPage2Header";
import ExamPage2Content from "../components/Exam Page 2/ExamPage2Content";
import Footer from "../components/ConstantComponent/Footer";

const ExamPage2 = ({ lv2Urls }) => {
  return (
    <div>
      <ExamPage2Header />
      <ExamPage2Content lv2Urls={lv2Urls} />
      <Footer />
    </div>
  );
};

export default ExamPage2;
