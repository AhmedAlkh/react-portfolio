import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	const currentProject = useState(props)[0].projects;

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
		<Card style={{ width: "20rem"}}>
			<div className="center">
				<Card.Body>
					<Card.Title>{projectName}</Card.Title>
                    <Card.Img 
                        variant="top"
				        src={require(`../assets/screenshots/${screenShot}`)}
				        className="card-image"
			        />
					<Card.Text>{description}</Card.Text>
					<Card.Subtitle>Technologies used:</Card.Subtitle>
					<Card.Text>{getTechUsed(techUsed)}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">
						Deployed App Link
					</Card.Link>
					<br></br>
					<Card.Link href={ghLink} target="_blank" className="card-link">
						GitHub Repo Link
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;