import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { TransitionProvider } from "./hooks/usePageTransition";
import { useGlobalHoverSound } from "./hooks/useKeySound";
import Navbar from "./components/Navbar";
import FloatingCustomizer from "./components/FloatingCustomizer";
import RightRail from "./components/RightRail";
import PageTransitionOverlay from "./components/PageTransitionOverlay";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function SoundListener() {
  useGlobalHoverSound();
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <TransitionProvider>
          <div className="page-wrapper">
            <SoundListener />
            <RightRail />
            <PageTransitionOverlay />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <FloatingCustomizer />
          </div>
        </TransitionProvider>
      </Router>
    </ThemeProvider>
  );
}
