import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <header>
        <Nav />
        <Hero />
      </header>
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
