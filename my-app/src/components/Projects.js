import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';

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
    <>
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
        <Button variant="outline-info" className="app-link" href={appLink} target="_blank" rel="noreferrer">
          Deployed App
        </Button>
		<br></br>
        <Button variant="outline-info" className="gh-link" href={ghLink} target="_blank" rel="noreferrer">
          GitHub Repo
        </Button>
		</div>
      </Carousel.Caption>
    </>
  );
}

export default Project;