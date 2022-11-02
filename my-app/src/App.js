import React from "react";
import Particles from "./components/Particles";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
        <Particles id="tsparticles" />
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <Footer />
        </div>
    )
}

export default App;