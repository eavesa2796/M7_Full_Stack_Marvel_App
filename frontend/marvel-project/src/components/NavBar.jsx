// Import React and required Bootstrap components
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

// Import navigation tools from React Router
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  // Get the current route so we can highlight the active link
  const location = useLocation();

  return (
    // Main navigation bar: dark themed, expands on large screens, sticks to top
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Navbar brand logo linked to homepage */}
        <Navbar.Brand as={Link} to="/">
          <img src="/marvel-logo.png" alt="Logo" style={{ width: "100px" }} />
        </Navbar.Brand>

        {/* Hamburger toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar links section */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Home link */}
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>

            {/* View Characters link */}
            <Nav.Link
              as={Link}
              to="/characters"
              active={location.pathname === "/characters"}
            >
              View Characters
            </Nav.Link>

            {/* Add Character link */}
            <Nav.Link
              as={Link}
              to="/characters/add"
              active={location.pathname === "/characters/add"}
            >
              Add Character
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export the NavBar component for use in the main layout
export default NavBar;
