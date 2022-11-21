import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
  <div className="footerDiv">
    <FaGithub className="footer-icon" />
    <FaLinkedin className="footer-icon" />
    <FaEnvelope className="footer-icon" />
    <h5 className="footerText">© 2022 All Rights Reserved.</h5>
  </div>
    )
}

export default Footer;