import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
