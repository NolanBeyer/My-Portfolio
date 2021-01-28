import React, { Fragment } from "react";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="home--page">
        <h1 className="name">Nolan Beyer</h1>
        <h2>Junior Full Stack Web Developer</h2>
        <i className="fas fa-code"></i>
        <h3>React JS || HTML/CSS || Node || Express || SQL</h3>
      </div>

      <div className="about--me">
        <h2>PROJECTS</h2>
      </div>

      <div className="projects container">
        <div className="card">
          <h2 className="card-title">Offer Up</h2>
          <div className="icon">
            <i className="fas fa-cart-arrow-down"></i>
          </div>
          <p className="project-info">
            My first full stack project using React, Redux, Express, Massive, Bcrypt, and SQL to post, edit, delete and sell items. 
          </p>
          <a className="btn btn-primary btn-round">Choose Plan</a>
        </div>

        <div className="card">
          <h2 className="card-title">Face Rec</h2>
          <div className="icon">
            <i className="far fa-eye"></i>
          </div>
          <p className="project-info">A site with two factor authentication to manage your passwords from various sites.</p>
          <a className="btn btn-primary btn-round">Choose Plan</a>
        </div>

        <div className="card">
          <h2 className="card-title">Task Tracker</h2>
          <div className="icon">
            <i className="fas fa-tasks"></i>
          </div>
          <p className="project-info">
            Add, delete, toggle, and manage tasks.
          </p>
          <a className="btn btn-secondary btn-round">More Info →</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
