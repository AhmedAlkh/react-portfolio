import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(props) {
  const { currentSection, setCurrentSection } = props;

    return (
      // Changed Navbar expand="lg" to Navbar expand="sm" and made it so that navbar button only appears on cellphone screen.
        <Navbar expand="sm">
        <Container className="nav-cont">
          <Navbar.Brand><p className="main-title">Ahmed's Portfolio</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link className={currentSection === 'about'}>
              <span onClick={() => setCurrentSection('about')}>About</span>
            </Nav.Link>
            <Nav.Link className={currentSection === 'portfolio'}>
              <span onClick={() => setCurrentSection('portfolio')}>Portfolio</span>
            </Nav.Link>
            <Nav.Link className={currentSection === 'resume'}>
              <span onClick={() => setCurrentSection('resume')}>Resume</span>
            </Nav.Link>
            <Nav.Link className={currentSection === 'contact'}>
              <span onClick={() => setCurrentSection('contact')}>Contact</span>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
export default NavBar;