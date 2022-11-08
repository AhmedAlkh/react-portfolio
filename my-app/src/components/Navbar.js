import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(props) {
  const { currentSection, setCurrentSection } = props;

    return (
        <Navbar expand="lg"> 
        <Container>
          <Navbar.Brand href="#about">Ahmed's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className={currentSection === 'about'}>
              <span onClick={() => setCurrentSection('about')}>About Me</span>
            </Nav.Link>
            <Nav.Link className={currentSection === 'projects'}>
              <span onClick={() => setCurrentSection('projects')}>Projects</span>
            </Nav.Link>
            <Nav.Link className={currentSection === 'contact'}>
              <span onClick={() => setCurrentSection('contact')}>Contact</span>
            </Nav.Link>
            <Nav.Link className={currentSection === 'resume'}>
              <span onClick={() => setCurrentSection('resume')}>Resume</span>
            </Nav.Link>
              {/* <Nav.Link href="#about">About me</Nav.Link> */
              /* <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default NavBar;