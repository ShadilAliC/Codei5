import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
// console.log(process.env.BASE_URL,'meta.env.BASE_URL');


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;