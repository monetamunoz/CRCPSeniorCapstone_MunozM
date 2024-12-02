"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    {
        // Specialized Vinyl Collection
        title: "Specialized Vinyl Collection",
        description: "Explore niche genres like post-punk, industrial, Britpop, and rare soundtracks.",
        imgUrl: "/assets/img/deadwax/deadwax_sold.jpg",
      },
      {
        // Intimate and Curated Store Experience
        title: "Intimate and Curated Store Experience",
        description: "Enjoy a thoughtfully organized layout perfect for seasoned collectors and newcomers alike.",
        imgUrl: "/assets/img/deadwax/deadwax_vibe.jpg",
      },
      {
        // Friendly and Knowledgeable Staff
        title: "Friendly and Knowledgeable Staff",
        description: "Discover personalized recommendations and exceptional service from passionate music experts.",
        imgUrl: "/assets/img/deadwax/deadwax_staff.jpg",
      },
      {
        // Community Vibes and Local Support
        title: "Community Vibes and Local Support",
        description: "Connect with other music enthusiasts and support a store dedicated to fostering local culture.",
        imgUrl: "/assets/img/deadwax/deadwax_community.jpg",
      },
      {
        // RSD Participant
        title: "Record Store Day Participant",
        description: "Join exclusive vinyl releases and events as part of Record Store Day celebrations.",
        imgUrl: "/assets/img/deadwax/deadwax_rsd.jpg",
      },
      {
        // In-store Listening and Discovery
        title: "In-store Listening and Discovery",
        description: "Preview unsealed records on-site for an immersive music discovery experience.",
        imgUrl: "/assets/img/deadwax/deadwax_location.jpg",
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
                      Nestled in the heart of Carrollton, TX, Dead Wax Records is a haven for music enthusiasts, offering a carefully curated selection 
                      of new and used vinyl that caters to a wide range of tastes. Specializing in post-punk, industrial, shoegaze, Britpop, and rare 
                      indie gems from the '70s, '80s, and '90s, Dead Wax stands out as a niche destination for collectors and casual shoppers alike. From 
                      out-of-print classics to Studio Ghibli soundtracks and everything in between, the shop’s selection emphasizes quality over quantity, 
                      ensuring every visit is an opportunity to discover something extraordinary.
                      </p>
                      <p>
                      Opened as a brick-and-mortar store in 2022 after years of thriving in flea market pop-ups, Dead Wax has quickly become a community favorite. 
                      Despite its modest size, the shop's clean, modern layout creates an inviting atmosphere, perfect for leisurely browsing or connecting 
                      with fellow music lovers. Owner Alan Haworth’s dedication to creating a friendly, judgment-free space makes Dead Wax more than just a 
                      record store—it’s a community hub where conversations flow as easily as the music. Whether you're seeking an obscure pressing, attending 
                      an in-store event, or simply stopping by on your way to dinner, Dead Wax Records offers a refreshing, welcoming take on the classic record shop experience.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                    Dead Wax Records is located at 1014 S Broadway St, Suite 108, Carrollton, TX 75006, in the vibrant Downtown Carrollton area. Conveniently nestled near local dining favorites and accessible via the Downtown Carrollton Tram stop, the store is an ideal destination for music lovers and collectors alike. 
                    </p>
                    <p>
                    Dead Wax is open seven days a week, offering flexible hours to suit your schedule: Monday through Saturday from 11:00 AM to 7:00 PM and Sundays from 12:00 PM to 6:00 PM. Whether you're stopping by after brunch, before dinner, or during a leisurely afternoon, Dead Wax Records provides a welcoming space to explore its meticulously curated selection of vinyl, CDs, and more.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: '250px', margin: '0 auto' }}>
                      <Image
                        src="/assets/img/deadwax/deadwax_map.png" // Replace with the actual image path
                        alt="Google Map Location"
                        className="img-fluid"
                        width={200}
                        height={200}
                        priority
                      />
                      <div className="proj-txtx">
                        <h4 className="font-itckabelM">Store Location</h4>
                        <span>Find them in Downtown Carrollton.</span>
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
