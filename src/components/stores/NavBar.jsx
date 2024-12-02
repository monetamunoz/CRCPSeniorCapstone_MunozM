"use client";

import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link"; // Next.js Link for navigation

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* Home icon aligned to the left */}
        <Navbar.Brand>
          <Link href="/" scroll={false}>
            <Image src="/assets/img/home.png" alt="Logo" width={50} height={50} />
          </Link>
        </Navbar.Brand>

        {/* Toggle button stays on the right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
      </Container>
    </Navbar>
  );
};

export default NavBar;

