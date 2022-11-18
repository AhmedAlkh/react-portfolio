import React from "react";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <section className="resume-page">
      <div className="center resume-title">
        <h1>Resume</h1>
      </div>
      <div className="btn-div">
        <Button
          className="resume-btn"
          href={require("../assets/resume/resume2022.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          <h4>Download My Resume</h4>
        </Button>
      </div>
      <div className="resume-screenshots">
        <img
        className="resume"
          src={require("../assets/screenshots/resume1.png")}
          alt="Resume screenshot"
        />
        <img
        className="resume"
          src={require("../assets/screenshots/resume2.png")}
          alt="Resume screenshot"
        />
      </div>
      <div className="centering-cont">
      <div className="skills-container">
        <h3 className="skills-title">Skills</h3>
        <hr></hr>
        <div className="skills-list">
          <p>Front-End: HTML/CSS/JavaScript/Bootstrap/React</p>
          <p>Back-End: APIs/Node/Express/MVC/PWA</p>
          <p>Dev Tools: Github/NPM/Webpack</p>
          <p>Database: MySQL/NoSQL/MongoDB/GraphQL</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Resume;
