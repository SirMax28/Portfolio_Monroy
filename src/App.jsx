import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import CocaColaProject from "./components/CocaColaProject";
import JuanValdezProject from "./components/JuanValdezProject";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/coca-cola" element={<CocaColaProject />} />
        <Route path="/juan-valdez" element={<JuanValdezProject />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#070000] antialiased selection:bg-red-500/50 selection:text-white overflow-hidden">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
