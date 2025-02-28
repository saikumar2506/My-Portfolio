import React from "react";
import "./Footer.css";
import { FaGithub,  FaLinkedin } from "react-icons/fa"; // Import icons from react-icons


const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>© 2025 saikumar's Portfolio. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://github.com/saikumar2506"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kumar-bandreddi-689706256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;