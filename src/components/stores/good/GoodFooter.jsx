"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={1} sm={6}>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://facebook.com/goodrecords">
                <Image src="/assets/img/nav-icon2.svg" alt="Icon" width={30} height={30} />
              </a>
              <a href="https://instagram.com/goodrecords">
                <Image src="/assets/img/nav-icon3.svg" alt="Icon" width={30} height={30} />
              </a>
            </div>
            <p> C3 Senior Capstone: Monet Munoz</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;