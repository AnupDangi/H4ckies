import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import DrugInteraction from "./components/DrugInteraction";
import './App.css'; // Import global CSS file

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/" element={<GetStarted />} />
          <Route path="/DrugInteraction" element={<DrugInteraction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
