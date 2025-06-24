import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "../Button/Button";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  return (
    <Navbar expand="lg" className="custom-navbar py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4 text-dark">
          <img
            alt="TechVita"
            src="../src/assets/techvita_full.png"
            width="150"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav
            className="mx-auto"
            activeKey={activeLink}
            onSelect={handleSelect}
          >
            <Nav.Link
              eventKey="home"
              href="#home"
              className={`mx-2 ${activeLink === "home" ? "active" : ""}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="about"
              href="#about"
              className={`mx-2 ${activeLink === "about" ? "active" : ""}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              eventKey="services"
              href="#services"
              className={`mx-2 ${activeLink === "services" ? "active" : ""}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              eventKey="portfolio"
              href="#portfolio"
              className={`mx-2 ${activeLink === "portfolio" ? "active" : ""}`}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              eventKey="pricing"
              href="#pricing"
              className={`mx-2 ${activeLink === "pricing" ? "active" : ""}`}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              eventKey="team"
              href="#team"
              className={`mx-2 ${activeLink === "team" ? "active" : ""}`}
            >
              Team
            </Nav.Link>
            <Nav.Link
              eventKey="contact"
              href="#contact"
              className={`mx-2 ${activeLink === "contact" ? "active" : ""}`}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Button
            text="Get Started"
            className=""
            link="#"
            clickHandler={() => {}}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
