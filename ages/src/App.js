import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import TelcPage from "./Pages/TelcPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import StartExamPage from "./Pages/StartExamPage";
import ExamPage1 from "./Pages/ExamPage1";
import ExamPage2 from "./Pages/ExamPage2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-register" element={<LoginRegisterPage />} />
        <Route path="/Telc" element={<TelcPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/start-exam" element={<StartExamPage />} />
        <Route path="/exam-page-1" element={<ExamPage1 />} />
        <Route path="/exam-page-2" element={<ExamPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
