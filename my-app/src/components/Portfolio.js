import React from "react";
import Project from "./Projects";

function Portfolio() {
    const projects = [
		{
			projectName: 'On-Demand CRM',
			description:
				'The On-Demand CRM app is used to input(and store), view and extract data on client profiles. Keep your list of potential and existing clients organized.',
            screenShot: 'crm.png',
			techUsed: [
				'html/css',
				'javascript',
				'node.js',
				'express',
				'handlebars',
				'mysql/mysql2',
				'sequelize',
			],
			ghLink: 'https://github.com/AhmedAlkh/On-Demand-CRM',
			appLink: 'https://mysterious-badlands-54283.herokuapp.com/',
		},
		{
			projectName: 'Tech Blog',
			description:
				'Developers can use Tech Blog to publish articles and blog posts, along with their thoughts and opinions.',
            screenShot: 'tech-blog.png',
			techUsed: [
				'html/css',
				'javascript',
				'node.js',
                'express',
				'handlebars',
                'mysql/mysql2',
				'sequelize'
			
			],
			ghLink: 'https://github.com/AhmedAlkh/Tech-blog',
			appLink: 'https://still-cove-68689.herokuapp.com/',
		},
		{
			projectName: 'Global News Finder',
			description:
				'A tourists best friend. Select a country from the drop-down menu and the app will display information on that country.',
            screenShot: 'gnf.png',
			techUsed: [
                'html/css', 
                'javascript', 
                'jquery'
            ],
			ghLink: 'https://github.com/salmanghouse1/global-news-finder',
			appLink: 'https://salmanghouse1.github.io/global-news-finder/',
		},
		{
			projectName: 'Weather Dashboard',
			description:
				'This is a weather dashboard that displays current weather and a five day forecast. Enter the name of a city to get the weather.',
            screenShot: 'weather-dash.png',
			techUsed: [
                'html',
                'css',
				'javascript'
			],
			ghLink: 'https://github.com/AhmedAlkh/weather-dashboard',
			appLink: 'https://ahmedalkh.github.io/weather-dashboard/',
		},
		{
			projectName: 'Password Generator',
			description:
				'Random password generator app. User selects criteria for password(uppercase, lowercase, symbols, numbers, length) and a password is generated.',
            screenShot: 'pg.png',
			techUsed: [
                'html',
                'css',
                'javascript'],
            ghLink: 'https://github.com/AhmedAlkh/password-generator',
			appLink: 'https://ahmedalkh.github.io/password-generator/',
		},
		{
			projectName: 'Memestagram',
			description:
				'Memestagram is a visual platform. The purpose of this application is to enable users to share images with their audience.',
            screenShot: 'Memestagram.png',
			techUsed: [
                'React', 
                'Express',
				'Mongoose',
				'Bcrypt',
				'JWT',
				'Mongodb',
				'Cloudinary'
            ],
			ghLink: 'https://github.com/AhmedAlkh/memestagram',
			appLink: 'https://memestagram1.herokuapp.com/signin',
		},
	];

	return (
		<section>
			<div className="center">
				<h1>Projects</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="card-padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="card-padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="card-padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="card-padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="card-padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="card-padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;