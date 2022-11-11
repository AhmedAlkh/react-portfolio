import React from "react";
import Carousel from "react-bootstrap/Carousel";

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
      <img
        className="d-block carousel-style"
        src={require(`../assets/screenshots/${screenShot}`)}
        alt={projectName}
      />
      <Carousel.Caption>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <p>{getTechUsed(techUsed)}</p>
        <a href={appLink} target="_blank" rel="noreferrer">
          Deployed App Link
        </a>
        <br></br>
        <a href={ghLink} target="_blank" rel="noreferrer">
          GitHub Repo Link
        </a>
      </Carousel.Caption>
    </>
  );
}

export default Project;