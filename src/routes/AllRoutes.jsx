import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../components/Layout/MainLayout";
import Users from "../pages/Users";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />

      </Route>
    </Routes>
  );
}

export default AllRoutes;

