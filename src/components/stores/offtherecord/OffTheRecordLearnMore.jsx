"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    {
        // Coffee and Vinyl Fusion
        title: "Coffee and Vinyl Fusion",
        description: "Experience the perfect pairing of artisanal coffee and curated vinyl records.",
        imgUrl: "/assets/img/spin/spin_coffee_vinyl.jpg",
      },
      {
        // Cereal Bar and Board Games
        title: "Cereal Bar and Board Games",
        description: "Relive childhood nostalgia with a cereal bar and enjoy board games with friends.",
        imgUrl: "/assets/img/spin/spin_cereal_games.jpg",
      },
      {
        // Unique Vinyl Collection
        title: "Unique Vinyl Collection",
        description: "Browse an eclectic mix of timeless classics, modern hits, and niche genres.",
        imgUrl: "/assets/img/spin/spin_vinyl_collection.jpg",
      },
      {
        // Craft Coffee and Local Pastries
        title: "Craft Coffee and Local Pastries",
        description: "Savor expertly brewed coffee paired with pastries from local bakeries.",
        imgUrl: "/assets/img/spin/spin_coffee_pastries.jpg",
      },
      {
        // Record Store Day Participant
        title: "Record Store Day Participant",
        description: "Celebrate music with exclusive vinyl releases and community events.",
        imgUrl: "/assets/img/spin/spin_rsd.jpg",
      },
      {
        // Welcoming Community Atmosphere
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
              The Spin Coffee & Vinyl is more than just a coffee shop or record store; it’s a space designed to bring people together over shared passions for music and culture. Whether you’re sipping a lavender latte, flipping through vinyl classics, or enjoying a game of Scrabble with friends, The Spin invites you to slow down and savor the moment. Its curated collection of records, community-focused atmosphere, and creative menu make it a destination for coffee enthusiasts and music lovers alike. Stop by and discover how The Spin transforms a simple outing into an unforgettable experience.
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
                    The Spin Coffee & Vinyl is a unique hybrid concept that brings together the comfort of a coffee shop and the charm of a record store, creating a social space where music and mocha converge. Located in North Dallas, The Spin offers a welcoming environment filled with the aroma of fresh coffee, the warmth of cozy decor, and the timeless appeal of vinyl records spinning on a turntable.
                    </p>
                      <p>
                      The father-son duo behind The Spin, with a background in hosting community-driven spaces, has combined their love for music and hospitality to create this vibrant spot. Guests can enjoy a diverse selection of coffee drinks, including classics like vanilla and chocolate, as well as unique flavors like lavender and hazelnut. Paired with pastries from local favorites like La Casita Bakeshop and Reverie Bakeshop, the menu ensures a satisfying start to your day. With a record collection spanning classics to modern hits across genres like punk, jazz, and pop, and even turntables and accessories for sale, The Spin offers an immersive experience for music enthusiasts. Add in a cereal bar and a variety of board games, and The Spin becomes more than a coffee shop—it’s a community hub designed to bring people together.
                      </p>
                      
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                    The Spin Coffee & Vinyl is located at 17290 Preston Road, No. 106, Dallas, TX 75252, nestled in the heart of North Dallas. This cozy and welcoming space offers the perfect setting to enjoy great coffee, browse an eclectic vinyl collection, and connect with fellow enthusiasts. The shop is open Tuesday through Saturday from 8:00 AM to 8:00 PM, making it an ideal stop for morning coffee, an afternoon browsing session, or an early evening hangout. On Sundays, the shop opens from 10:00 AM to 6:00 PM, offering a relaxed vibe for weekend visitors. 
                    </p>
                    <p>
                    The Spin is closed on Mondays, ensuring the team is refreshed to deliver an exceptional experience the rest of the week. Whether you’re stopping by for a quick coffee, picking up a vinyl, or spending the day soaking in the atmosphere, The Spin Coffee & Vinyl has hours that suit a variety of schedules.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: '250px', margin: '0 auto' }}>
                      <Image
                        src="/assets/img/otr/offtherecord_map.png" // Replace with the actual image path
                        alt="Google Map Location"
                        className="img-fluid"
                        width={200}
                        height={200}
                        priority
                      />
                      <div className="proj-txtx">
                        <h4 className="font-itckabelM">Store Location</h4>
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