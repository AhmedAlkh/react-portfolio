import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
  <div className="footerDiv">
    {/* GitHub link in footer  */}
    <a href="https://github.com/AhmedAlkh" target="_blank" rel="noreferrer">
    <FaGithub className="footer-icon" />
    </a>

    {/* LinkdIn link in footer  */}
    <a href="https://www.linkedin.com/in/ahmed-alkhatib-96599b220/" target="_blank" rel="noreferrer">
    <FaLinkedin className="footer-icon" />
</a>
    {/* Email link in footer  */}
    <a href="https://github.com/AhmedAlkh" target="_blank" rel="noreferrer">
    <FaEnvelope className="footer-icon" />
    </a>
    <h5 className="footerText">© 2022 All Rights Reserved.</h5>
  </div>
    )
}

export default Footer;