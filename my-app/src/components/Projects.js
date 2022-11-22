import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button'; 
import { FaArrowCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Project(props) {
  const currentProject = props.projects;
  const screenShot = currentProject.screenShot;
  const projectName = currentProject.projectName;
  const description = currentProject.description;
  const techUsed = currentProject.techUsed;
  const appLink = currentProject.appLink;
  const ghLink = currentProject.ghLink;

  function getTechUsed(techArray) {
    let techList = "";

    for (var i = 0; i < techArray.length; i++) {
      if (i === techArray.length - 1) {
        techList += techArray[i];
      } else {
        techList += techArray[i] + ", ";
      }
    }

    return techList;
  }

  return (
    <section className="projects-section">
	<div className="img-container">
      <img
        className="d-block carousel-style"
        src={require(`../assets/screenshots/${screenShot}`)}
        alt={projectName}
      />
	  </div>
      <Carousel.Caption>
	  	<div className="info-container">
        	<h3>{projectName}</h3>
        	<p>{description}</p>
        	<p>{getTechUsed(techUsed)}</p>
		</div>
	<div className="btn-container">
        <Button className="app-link" href={appLink} target="_blank" rel="noreferrer">
          Deployed App
          <FaArrowCircleRight className="btn-icon"/>
        </Button>
		<br></br>
        <Button className="gh-link" href={ghLink} target="_blank" rel="noreferrer">
          GitHub Repo
          <FaGithub className="btn-icon"/>
        </Button>
		</div>
      </Carousel.Caption>
    </section>
  );
}

export default Project;