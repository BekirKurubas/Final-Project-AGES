import React from "react";
import ExamPage2Header from "../components/Exam Page 2/ExamPage2Header";
import ExamPage2Content from "../components/Exam Page 2/ExamPage2Content";
import Footer from "../components/ConstantComponent/Footer";

const ExamPage2 = () => {
  const startTimer = (timeInSeconds) => {
    // Sınav zamanlayıcısını başlatmak için burada gerekli kodu ekleyin
  };

  const handleStartExam = () => {
    // Sınavın süresini başlat
    startTimer(90 * 60);
  };

  const lv2Urls = [
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-2.1_page-0001.jpg",
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-2.2_page-0001.jpg",
  ];

  return (
    <div>
      <ExamPage2Header />
      <ExamPage2Content lv2Urls={lv2Urls} startTimer={handleStartExam} />
      <Footer />
    </div>
  );
};

export default ExamPage2;
