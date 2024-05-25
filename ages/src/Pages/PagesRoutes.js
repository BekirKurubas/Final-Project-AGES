import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import TelcPage from "./TelcPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import StartExamPage from "./StartExamPage";
import ExamPage1 from "./ExamPage1";
import ExamPage2 from "./ExamPage2";
import ExamPage3 from "./ExamPage3";
import ExamPage4 from "./ExamPage4";
import ExamPage5 from "./ExamPage5";
import MainLayout from "./pageLayout.js/MainLayout";
import ResultPage from "./ResultPage";

function PagesRoutes() {
  const lv1Urls = [
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-1.1_page-0001.jpg",
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-1.2_page-0001.jpg",
  ];

  const lv2Urls = [
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-2.1_page-0001.jpg",
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-2.2_page-0001.jpg",
  ];

  const lv3Urls = [
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-3.1_page-0001.jpg",
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Lesen-Verstehen-3.2_page-0001.jpg",
  ];

  const sb1Urls = [
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Sprachbausteine-1_page-0001.jpg",
  ];

  const sb2Urls = [
    "https://github.com/BekirKurubas/Final-Project-Photos/raw/main/Project%20Photos/Sprachbausteine-2_page-0001.jpg",
  ];

  const [remainingTime, setRemainingTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {}, [remainingTime, timerRunning]);

  const handleStartExam = () => {
    setRemainingTime(5400);

    setTimerRunning(true);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />          
          <Route path="/Telc" element={<TelcPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/start-exam"
            element={<StartExamPage startTimer={handleStartExam} />}
          />
          <Route
            path="/exam-page-1"
            element={<ExamPage1 lv1Urls={lv1Urls} />}
          />          
          <Route
            path="/exam-page-2"
            element={<ExamPage2 lv2Urls={lv2Urls} />}
          />
          <Route path="/exam-page-3" 
          element={<ExamPage3 lv3Urls={lv3Urls}/>} />
          
          <Route path="/exam-page-4" 
          element={<ExamPage4 sb1Urls={sb1Urls}/>} />

          <Route path="/exam-page-5" 
          element={<ExamPage5 sb2Urls={sb2Urls}/>} />

          <Route path="/result-page" 
          element={<ResultPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default PagesRoutes;
