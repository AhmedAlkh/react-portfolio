import React from "react";
import NavBar from "./Navbar";

function Header(props) {
    const { currentSection, setCurrentSection } = props;

    return (
        <header>
            <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection}></NavBar>
        </header>
    )
}

export default Header;