import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <a className="links" href="https://github.com/NolanBeyer">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a
        className="links"
        href="https://www.linkedin.com/in/nolan-beyer-5252731b1/">
        <i class="fab fa-linkedin"></i> in LinkedIn
      </a>
      <a className="links" href="nolanbeyer40@gmail.com">
        <i class="fas fa-envelope"></i> Email
      </a>
    </div>
  );
};

export default Footer;
