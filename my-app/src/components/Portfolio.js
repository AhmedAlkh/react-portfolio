import React from "react";
import Project from "./Projects";
import Carousel from "react-bootstrap/Carousel";

function Portfolio() {
  const projects = [
    {
      key: "on-demand-crm",
      projectName: "On-Demand CRM",
      description:
        "The On-Demand CRM app is used to input(and store), view and extract data on client profiles.",
      // This was removed from end of description: Keep your list of potential and existing clients organized.
      screenShot: "crm2.png",
      techUsed: [
        "html/css",
        "javascript",
        "node.js",
        "express",
        "handlebars",
        "mysql/mysql2",
        "sequelize",
      ],
      ghLink: "https://github.com/AhmedAlkh/On-Demand-CRM",
      appLink: "https://mysterious-badlands-54283.herokuapp.com/",
    },
    {
      key: "tech-blog",
      projectName: "Photos by Alaa",
      description:
        "Website built to showcase my sisters photography work and link to social medias. A functional contact form is included.",
      screenShot: "pbav3-screenshot.png",
      techUsed: ["html/css", "bootstrap", "javascript"],
      ghLink: "https://github.com/AhmedAlkh/pbav3",
      appLink: "https://photosbyalaa.netlify.app/",
    },
    {
      key: "global-news",
      projectName: "Global News Finder",
      description:
        "A tourists best friend. Select a country from the drop-down menu and the app will display information on that country.",
      screenShot: "gnf2.png",
      techUsed: ["html/css", "javascript", "jquery"],
      ghLink: "https://github.com/salmanghouse1/global-news-finder",
      appLink: "https://salmanghouse1.github.io/global-news-finder/",
    },
    {
      key: "weather-dashboard",
      projectName: "Weather Dashboard",
      description:
        "This is a weather dashboard that displays current weather and a five day forecast. Enter the name of a city to get the weather.",
      screenShot: "wd.png",
      techUsed: ["html", "css", "javascript"],
      ghLink: "https://github.com/AhmedAlkh/weather-dashboard",
      appLink: "https://ahmedalkh.github.io/weather-dashboard/",
    },
    {
      key: "password-generator",
      projectName: "Password Generator",
      description:
        "User selects criteria for password(uppercase, lowercase, symbols, numbers, length) and a password is generated.",
      // This was removed from start of description: Random password generator app.
      screenShot: "pg2.png",
      techUsed: ["html", "css", "javascript"],
      ghLink: "https://github.com/AhmedAlkh/password-generator",
      appLink: "https://ahmedalkh.github.io/password-generator/",
    },
    {
      key: "memestagram",
      projectName: "Memestagram",
      description: "This social media platform is all about the memes!",
      // Old description: Memestagram is a visual platform. The purpose of this application is to enable users to share images with their audience.
      screenShot: "meme.png",
      techUsed: [
        "React",
        "Express",
        "Mongoose",
        "Bcrypt",
        "JWT",
        "Mongodb",
        "Cloudinary",
      ],
      ghLink: "https://github.com/AhmedAlkh/memestagram",
      appLink: "https://memestagram1.herokuapp.com/signin",
    },
  ];

  return (
    <section className="portfolio-section">
      {/* <div className="center"> */}
      <h1 className="portfolio-title">Projects</h1>
      {/* </div> */}

      <div className="carousel-container">
        <Carousel slide>
          {projects.map((project) => {
            return (
              <Carousel.Item key={project.key}>
                <Project projects={project}></Project>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Portfolio;
