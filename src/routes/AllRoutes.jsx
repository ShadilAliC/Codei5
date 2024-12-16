import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../components/Layout/MainLayout";
import Users from "../pages/Users";
import UserRoles from "../pages/UserRoles";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route  element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/roles" element={<UserRoles />} />


      </Route>
    </Routes>
  );
}

export default AllRoutes;

