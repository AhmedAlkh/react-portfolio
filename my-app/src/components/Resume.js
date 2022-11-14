import React from "react";

function Resume() {
    return (
		<section>
			<div className="center">
				<h1>Resume</h1>
			</div>
			<div>
				<a className="center" href={require("../assets/resume/resume2022.pdf")} target="_blank" rel="noreferrer">
					<h4>Download My Resume</h4>
				</a>
			</div>
            <div>
                <h3 className="skills">Skills</h3>
                <hr />
                    <ul>
                        <li>Front-End: HTML/CSS/JavaScript/Bootstrap/React</li>
                        <li>Back-End: APIs/Node/Express/MVC/PWA</li>
                        <li>Dev Tools: Github/NPM/Webpack</li>
                        <li>Database: MySQL/NoSQL/MongoDB/GraphQL</li>
                    </ul>
            </div>
		</section>
	);
}

export default Resume;