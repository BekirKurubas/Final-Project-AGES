import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import TelcPage from "./Pages/TelcPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import StartExamPage from "./Pages/StartExamPage";

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
      </Routes>
    </div>
  );
}

export default App;
