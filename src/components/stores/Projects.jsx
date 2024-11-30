"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    {
      // Sells Vinyl
      title: "Vinyl Collection",
      description: "Discover a curated selection of new and vintage vinyl records.",
      imgUrl: "/assets/img/Spinster_vinyl.webp",
    },
    {
      // Sells turntables
      title: "Turntables",
      description: "Shop high-quality turntables for your listening experience.",
      imgUrl: "/assets/img/Spinster_products.webp",
    },
    {
      // Sells audio accessories
      title: "Audio Accessories",
      description: "Enhance your setup with premium audio gear and accessories.",
      imgUrl: "/assets/img/Spinster_accessories.webp",
    },
    {
      // Purchases Vinyl
      title: "Sell Your Vinyl",
      description: "Bring in your records and sell them for cash or store credit.",
      imgUrl: "/assets/img/Spinster_purchase.webp",
    },
    {
      // Has a concert stage for their venue
    title: "Live Music Stage",
    description: "Enjoy live performances at their in-store concert stage.",
    imgUrl: "/assets/img/Spinster_stage.webp",
    },
    {
      // RSD Participant
    title: "Record Store Day Participant",
    description: "Join for exclusive vinyl releases and events on RSD.",
    imgUrl: "/assets/img/Spinster_RSD.jpg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Highlights</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">About/History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Location</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit,
                      rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus
                      quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit,
                      rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus
                      quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <Image
        className="background-image-right"
        src="/assets/img/color-sharp2.png"
        alt="Background Shape"
        width={500}
        height={500}
      />
    </section>
  );
};

export default Projects;
