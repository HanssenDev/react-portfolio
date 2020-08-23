import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
