import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import CocaColaProject from "./components/CocaColaProject";
import JuanValdezProject from "./components/JuanValdezProject";
import CharlieChocolateProject from "./components/CharlieChocolateProject";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/coca-cola" element={<CocaColaProject />} />
        <Route path="/juan-valdez" element={<JuanValdezProject />} />
        <Route
          path="/charlie-chocolate"
          element={<CharlieChocolateProject />}
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    // Configuración Base de Lenis para Scroll Fluido Inercial
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#070000] antialiased selection:bg-red-500/50 selection:text-white overflow-x-hidden cursor-none">
        <Preloader />
        <CustomCursor />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
