import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./GetStarted";
import Home from "./Home";
import Welcome from "./Welcome";
import DrugInteraction from "./DrugInteraction";
const App = () => {
 return (
 <Router>
 <div className="app">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/welcome" element={<Welcome />} />
 <Route path="/get-started" element={<GetStarted />} />
 <Route path="/drug-interaction" element={<DrugInteraction />} />
 </Routes>
 </div>
 </Router>
 );
};
export default App;