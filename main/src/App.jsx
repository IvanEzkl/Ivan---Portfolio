import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useGlobalHoverSound } from "./hooks/useKeySound";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
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
        <div className="page-wrapper">
          <ThreeBackground />
          <SoundListener />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
