import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const AppRoutes = () => {
  const {} = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
