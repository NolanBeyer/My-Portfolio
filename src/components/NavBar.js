import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
  const history = useState();
  return (
    <div className="NavBar">
      <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/");
          }}
        >
          {" "}
          <img
            width="50"
            height="50"
            alt=""
            src="../../../../HealingHubLogo.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <Nav.Link
            onCLick={() => {
              history.push("/about");
            }}
          >
            About
          </Nav.Link>

          <Nav.Link
            onCLick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </Nav.Link>

          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
