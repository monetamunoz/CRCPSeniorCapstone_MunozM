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
              Spinster Records isn't just a store; it's a vibrant community hub for music lovers, 
              vinyl enthusiasts, and creatives alike. Explore a curated selection of vintage and new vinyl, 
              discover unique audio gear, and dive into the stories behind favorite records. 
              </p>
              <p>
              From in-store events like live performances and industry panels to personalized recommendations 
              from their knowledgeable staff, Spinster Records is a place where music and lifestyle intersect. 
              Join in celebrating the art and culture of sound.
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
                      Spinster Records, established in 2014, is a vinyl record and music lifestyle store located in the Oak Cliff neighborhood of Dallas, TX. 
                      The shop offers a curated selection of new and vintage vinyl records, turntables, hi-fi audio hardware, apparel, books, jewelry, and unique items selected by the staff. 
                      Weekly events include in-store performances, book signings, and music industry panels, making it a vibrant hub for music lovers.
                      </p>
                      <p>
                      In 2020, Spinster moved to the Bishop Arts District, enhancing its presence in a thriving community known for art, food, and culture. 
                      The store features standout design elements, including the Big Red Wall and a mural of the Dallas skyline, 
                      alongside locally designed Oak Cliff Apparel by Lewellyn’s Print Shop and exclusive items like pins and stickers from local artists.
                      </p>
                      <p>
                      Spinster Records also buys vinyl records and hi-fi hardware, offering fair quotes. 
                      Its services extend beyond the store with pop-ups, all-vinyl DJ sets, and event bookings. 
                      Spinster continues to celebrate music and creativity.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                    Spinster Records is conveniently located in the heart of the vibrant Bishop Arts District at 408 N Bishop Ave, Suite 102, Dallas, TX 75208. 
                    The store is easily accessible and surrounded by a lively neighborhood filled with shops, restaurants, and creative energy. 
                    </p>
                    <p>
                    Spinster Records welcomes visitors seven days a week, with hours tailored to fit your schedule: Monday through Thursday from 11:00 AM to 9:00 PM, 
                    Friday and Saturday from 11:00 AM to 11:00 PM, and Sunday from 12:00 PM to 8:00 PM. Whether you're browsing for vinyl, shopping for unique gifts, 
                    or attending one of our in-store events, they are here to provide a memorable experience.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: '250px', margin: '0 auto' }}>
                      <Image
                        src="/assets/img/Spinster_map.png" // Replace with the actual image path
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