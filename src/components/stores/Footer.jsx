"use client";

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./Mailchimp";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} sm={6}>
            <Image src="/assets/img/logo.svg" alt="Logo" width={150} height={50} />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <Image src="/assets/img/nav-icon1.svg" alt="Icon" width={30} height={30} />
              </a>
              <a href="#">
                <Image src="/assets/img/nav-icon2.svg" alt="Icon" width={30} height={30} />
              </a>
              <a href="#">
                <Image src="/assets/img/nav-icon3.svg" alt="Icon" width={30} height={30} />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;