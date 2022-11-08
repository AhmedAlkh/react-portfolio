import React, { useState } from "react";
import Particles from "./components/Particles";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
    const [currentSection, setCurrentSection] = useState('about');
    const renderSection = () => {
        switch (currentSection) {
            case 'about':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />
        }
    }
    return (
        <div>
        <Particles id="tsparticles" />
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection}></Header>
        <main>
            <div>{renderSection(currentSection)}</div>
        </main>
        <Footer />
        </div>
    )
}

export default App;