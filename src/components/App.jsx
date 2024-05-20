import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Work from "./Work";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router basename="/profile">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/work" element={<Work />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
