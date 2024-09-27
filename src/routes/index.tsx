import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  NewFormProject,
  Login,
  ProgressPage,
  SettingPage,
  TasksPage,
  ProjectsPage,
  EditFormProject,
} from "../page";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/new-project" element={<NewFormProject />} />
        <Route path="/edit-project" element={<EditFormProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};
