"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    {
      title: "Coffee and Vinyl Fusion",
      description: "Experience the perfect pairing of artisanal coffee and curated vinyl records.",
      imgUrl: "/assets/img/spin/spin_coffee_vinyl.jpg",
    },
    {
      title: "Cereal Bar and Board Games",
      description: "Relive childhood nostalgia with a cereal bar and enjoy board games with friends.",
      imgUrl: "/assets/img/spin/spin_cereal_games.jpg",
    },
    {
      title: "Unique Vinyl Collection",
      description: "Browse an eclectic mix of timeless classics, modern hits, and niche genres.",
      imgUrl: "/assets/img/spin/spin_vinyl_collection.jpg",
    },
    {
      title: "Craft Coffee and Local Pastries",
      description: "Savor expertly brewed coffee paired with pastries from local bakeries.",
      imgUrl: "/assets/img/spin/spin_coffee_pastries.jpg",
    },
    {
      title: "Record Store Day Participant",
      description: "Celebrate music with exclusive vinyl releases and community events.",
      imgUrl: "/assets/img/spin/spin_rsd.jpg",
    },
    {
      title: "Welcoming Community Atmosphere",
      description: "A social space designed for music lovers and coffee enthusiasts to connect.",
      imgUrl: "/assets/img/spin/spin_community.jpg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="text-homeBar font-itckabel">Learn More</h2>
              <p>
                The Spin isn&apos;t just a coffee shop; it&apos;s a cultural hotspot that blends music, nostalgia, and creativity. 
                With a curated vinyl collection, artisanal coffee, and a welcoming community atmosphere, it&apos;s the perfect place to unwind and connect.
              </p>
              <p>
                From their unique cereal bar to Record Store Day celebrations, The Spin offers a diverse range of experiences 
                for music lovers, coffee enthusiasts, and everyone in between. It&apos;s a space where great taste meets great vibes.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="font-itckabelM">Highlights</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="font-itckabelM">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className="font-itckabelM">Location & Hours</Nav.Link>
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
                      Located in the heart of the community, The Spin offers more than just coffee and vinyl. 
                      It&apos;s a creative hub where you can enjoy board games with friends, discover rare records, or indulge in locally baked pastries. 
                      The curated collection of music spans genres and decades, offering something for every taste.
                    </p>
                    <p>
                      Beyond its offerings, The Spin is dedicated to fostering a sense of community. 
                      From live DJ sets to interactive events, it provides a platform for local talent and a gathering place for like-minded individuals. 
                      Whether you&apos;re exploring the vinyl selection or sipping on a latte, The Spin delivers a unique and memorable experience.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      The Spin is conveniently located at 123 Vinyl Lane, Music City, TX, making it a central destination for coffee and music lovers alike. 
                      Surrounded by vibrant shops and eateries, it&apos;s the perfect spot for a morning pick-me-up or an evening hangout.
                    </p>
                    <p>
                      Open seven days a week, The Spin ensures accessibility for all schedules: Monday through Thursday from 8:00 AM to 8:00 PM, 
                      Friday and Saturday from 8:00 AM to 10:00 PM, and Sunday from 9:00 AM to 7:00 PM.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: "250px", margin: "0 auto" }}>
                      <Image
                        src="/assets/img/spin/spin_map.png"
                        alt="Google Map Location"
                        className="img-fluid"
                        width={200}
                        height={200}
                        priority
                      />
                      <div className="proj-txtx">
                        <h4 className="font-itckabelM">Store Location</h4>
                        <span>Find them at the heart of Music City.</span>
                      </div>
                    </div>
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
