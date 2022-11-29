import React from "react";
import photo from "../assets/pictures/selfie1.jpeg"

function About() {
    return (
      <div>
        <section className="about-container">
      <h1 className="about-title">Ahmed Alkhatib</h1>
      <div className="picture-container">
      <img
        src={photo}
        className="picture"
        alt="selfie"
      />
      </div>
      <div className="about-text">
      <p>
          Welcome to my portfolio! My name is Ahmed Alkhatib and the bulk of my work experience has been
          in construction and warehousing. I've always had an interest in technology and in 2021 I decided
          to enroll in a coding program offered by University of Toronto to become a full-stack developer. I was introduced to the basic concepts and technologies of
          mobile app and web development. Throughout the duration of the course I had the opportunity to build several independant projects
          as well as some team projects in collaboration with class mates.  I look 
          forward to learning more and exploring new opportunities as I transition into a career as a web developer. In my personal time I enjoy working out in the gym,
          driving my car while listening to music, playing video games, and spending time with friends and family.
      </p>
      </div>
    </section>
    </div>
    )
}

export default About;