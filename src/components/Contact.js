import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__me">
        <h1 className="contact__title">Get in touch with me!</h1>
        <h2 className="contact__info">EMAIL: nolanbeyer40@gmail.com</h2>
        <h2 className="contact__info">
          FACEBOOK:{" "}
          <a
            className="contact__links fab fa-facebook"
            href="https://www.facebook.com/nolan.beyer/"> </a>
        </h2>
        <h2 className="contact__info">
          LINKEDIN:{" "}
          <a
            className="contact__links fab fa-linkedin"
            href="https://www.linkedin.com/in/nolan-beyer-5252731b1/"> </a>
        </h2>
        <h2 className="contact__info">
          GITHUB: {" "}
          <a
            className="contact__links fab fa-github"
            href="https://github.com/NolanBeyer"> </a>
        </h2>
        <h2 className="contact__info">
          RESUME:{" "}
          <a
            className="contact__links far fa-file"
            href="https://docs.google.com/document/d/1vDKrCI6gJ_dlaeLlpHgoYI028fGBEmxCJwByaa39pTw/edit?usp=sharing"> </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
