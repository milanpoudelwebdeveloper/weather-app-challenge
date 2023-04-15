import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import DetailsPage from "./pages/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default App;
