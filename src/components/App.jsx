import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Work from "./Work";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="/Portfolio" exact element={<Portfolio />} />
        {/* Add more routes for other pages here */}
      </Routes>
    </Router>
  );
}

export default App;
