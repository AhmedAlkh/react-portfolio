import React from "react";
import photo from "../assets/pictures/selfie1.jpeg"

function About() {
    return (
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
          to enroll in a coding program offered by University of Toronto. The program I enrolled in focused
          on website and mobile app development, teaching me to become a full-stack developer! I look 
          forward to learning more and exploring new opportunities. In my personal time I enjoy working out in the gym,
          driving my car while listening to music, playing video games, and spending time with friends and family.
      </p>
      </div>
    </section>
    )
}

export default About;