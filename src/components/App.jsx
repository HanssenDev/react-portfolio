import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {

    return (
        <header>
            <Nav />
            <Hero />
        </header>
        <main>
            <Projects />
            <Contact />
        </main>
        <Footer />
    )
}

export default App;