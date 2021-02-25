import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar
        className="NavBar"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark">
        <Navbar.Brand
          className="home__icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/");
          }}>
          {" "}
          <i class="home-icon fas fa-home"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <Nav.Link
            className="links"
            onClick={() => {
              history.push("/about");
            }}>
            About
          </Nav.Link>

          <Nav.Link
            className="links"
            onClick={() => {
              history.push("/contact");
            }}>
            Contact
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
