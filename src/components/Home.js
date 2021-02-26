import React, { Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <div className="home__overlay"></div>
        <h1 className="home__name">Nolan Beyer</h1>
        <h2 className="home__content">Junior Full Stack Web Developer</h2>
        <i className="fas fa-code home__icon"></i>
        <h3 className="home__skills">
          React JS || HTML/CSS || Node || Express || SQL
        </h3>
      </div>

      <div className="about--me">
        <h2>PROJECTS</h2>
      </div>

      <div className="cards">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <Card.Body>
                  <Card.Title className="text-center text-black">
                    Offer Up
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    My first full stack app with a database and authentication.
                  </Card.Text>
                  <a
                    className="buttons btn btn-dark"
                    href="https://github.com/NolanBeyer/Task-Tracker">
                    <i className="fab fa-chrome"> Site</i>
                  </a>
                  <a
                    className="buttons btn btn-dark"
                    href="https://github.com/NolanBeyer/personal-project">
                    <i className="fab fa-github"> Code</i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                width="70px"
                height="70px"
                className="text-center"
                style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <Card.Body>
                  <Card.Title className="text-black">Face Rec</Card.Title>
                  <hr />
                  <Card.Text>
                    A two factor authentication site with face id to store all
                    your passwords from various sites in.
                  </Card.Text>
                  <a
                    className="buttons btn btn-dark"
                    href="https://face-id.dev/#/">
                    <i className="fab fa-chrome"> Site</i>
                  </a>
                  <a
                    className="buttons btn btn-dark"
                    href="https://github.com/NolanBeyer/image-recognition">
                    <i className="fab fa-github"> Code</i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card-info text-center"
                style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <Card.Body>
                  <Card.Title className="text-black">Task Tracker</Card.Title>
                  <hr />
                  <Card.Text>
                    Add, complete, delete, set reminders and toggle completed
                  </Card.Text>

                  <a
                    className="buttons btn btn-dark"
                    href="https://github.com/NolanBeyer/Task-Tracker">
                    <i className="fab fa-chrome"> Site</i>
                  </a>
                  <a
                    className="buttons btn btn-dark"
                    href="https://github.com/NolanBeyer/Task-Tracker">
                    <i className="fab fa-github"> Code</i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
    </Fragment>
  );
};

export default Home;
