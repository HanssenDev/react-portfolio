import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Container from "react-bootstrap/container";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
