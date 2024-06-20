import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Academics from "./components/academics/Academics";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import MyTeam from "./components/myTeam/MyTeam";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "black" : ""}`}>
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Hero darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route
            path="/academics"
            element={<Academics darkMode={darkMode} />}
          />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/myteam" element={<MyTeam darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
        <About darkMode={darkMode} />
        <Academics darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <MyTeam darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
}
