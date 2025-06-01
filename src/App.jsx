import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-700 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
