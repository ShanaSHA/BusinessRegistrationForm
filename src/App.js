import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusinessRegistrationForm from "./BusinessRegistrationForm";
import Login from "./Login"; // Create a simple login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessRegistrationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
