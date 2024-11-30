"use client";

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link"; // Next.js Link for navigation
import logo from "/assets/img/logo.svg";
import navIcon1 from "/assets/img/nav-icon1.svg";
import navIcon2 from "/assets/img/nav-icon2.svg";
import navIcon3 from "/assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="#home" scroll={false} legacyBehavior>
              <Nav.Link
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
            </Link>
            <Link href="#skills" scroll={false} legacyBehavior>
              <Nav.Link
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
            </Link>
            <Link href="#projects" scroll={false} legacyBehavior>
              <Nav.Link
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <Image src={navIcon1} alt="Social Icon 1" width={20} height={20} />
              </a>
              <a href="#">
                <Image src={navIcon2} alt="Social Icon 2" width={20} height={20} />
              </a>
              <a href="#">
                <Image src={navIcon3} alt="Social Icon 3" width={20} height={20} />
              </a>
            </div>
            <Link href="#connect" scroll={false} legacyBehavior>
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;