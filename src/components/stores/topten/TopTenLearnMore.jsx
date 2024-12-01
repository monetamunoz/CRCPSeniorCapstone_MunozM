"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    { 
        // Sells CDs, movies, records, & tapes
        title: "Diverse Media Collection",
        description: "Browse CDs, vinyl records, tapes, and even movies for all tastes.",
        imgUrl: "/assets/img/topten/topten_media.jpg", // Replace with actual path
      },
      {
        // Unique Vinyl Organization
        title: "Vibe-Based Vinyl Organization",
        description: "Albums sorted by vibes like 'Good With Dinner,' not just genres.",
        imgUrl: "/assets/img/topten/topten_vibes.jpg", // Replace with actual path
      },
      {
        // Hosts events (music, film, poetry)
        title: "Cultural Events",
        description: "Attend live music, film screenings, poetry readings, and art exhibits.",
        imgUrl: "/assets/img/topten/topten_events.jpg", // Replace with actual path
      },
      {
        // Has a Texas music archive
        title: "Texas Music Archive",
        description: "Explore rare media documenting Texas' rich music and film history.",
        imgUrl: "/assets/img/topten/topten_archive.jpg", // Replace with actual path
      },
      {
        // Retro Listening Area
        title: "Retro Listening Area",
        description: "Enjoy in-store listening with vintage equipment in a nostalgic setup.",
        imgUrl: "/assets/img/topten/topten_listening.jpg", // Replace with actual path
      },
      {
        // Community-Focused Mission
        title: "Community-Focused Mission",
        description: "Preserving Oak Cliff's history while supporting local artists and culture.",
        imgUrl: "/assets/img/topten/topten_community.jpg", // Replace with actual path
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
Top Ten Records stands as a testament to the vibrant cultural history of Oak Cliff, blending nostalgia with a forward-looking mission. 
Founded in 1956, this iconic Dallas landmark offers a diverse collection of music, movies, and media that reflects decades of cultural evolution. 
From rare vinyl and tapes to uniquely categorized albums, Top Ten Records creates an eclectic experience for 
music lovers. Its retro listening area, paired with its Texas Music Archive, provides a bridge between the past and present, preserving the rich 
musical and cinematic heritage of Texas while fostering a space for discovery and creativity. 
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
                        Top Ten Records, established in 1956 in the Oak Cliff neighborhood of Dallas, TX, is the city’s longest-running record store and a 
                        cultural landmark with a rich history. Initially a community record shop and concert ticket outlet, it gained notoriety in 1963 as 
                        the last public place where Officer J.D. Tippit was seen before his tragic encounter with Lee Harvey Oswald. Today, Top Ten operates 
                        as a nonprofit organization known as Oak Cliff Records Library, combining its legacy as a record store with a mission to preserve and 
                        promote Texas music and film history.
                      </p>
                      <p>
                      The store boasts a unique blend of retail, archiving, and cultural programming. Guests can explore a curated collection of vinyl records 
                      emphasizing Texas-based artists, borrow rare and vintage media from its music library, or enjoy in-store listening in a retro-inspired area. 
                      Albums are categorized by vibe, such as the “Good With Dinner” section, maintaining the store’s eclectic charm. Beyond records, Top Ten hosts 
                      small cultural events, including concerts, film screenings, workshops, and art exhibits, serving as a hub for local culture.
                      </p>
                      <p>
                      Top Ten Records is dedicated to preserving Oak Cliff’s history and fostering media literacy through its Texas Music Archive project. 
                      It welcomes volunteers, donations of rare Texas music and film media, and community support to sustain its mission. This historic record 
                      store remains a vibrant resource for music lovers and cultural enthusiasts alike.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                    Top Ten Records is located in the heart of the vibrant Oak Cliff neighborhood at 338 W. Jefferson Blvd, Dallas, TX. 
                    Situated amidst a bustling community of art, culture, and history, the shop serves as a landmark for music lovers and archivists alike. 
                    Its convenient location makes it easily accessible, whether you're exploring the city's heritage or diving into its thriving creative scene. 
                    Visitors are welcomed to experience a blend of nostalgia and innovation at this historic record store.
                    </p>
                    <p>
                    Currently, Top Ten Records operates with limited hours, opening its doors from Wednesday to Thursday between 3 PM and 8 PM, 
                    and Friday to Saturday from 12 PM to 9 PM. On Sundays, the shop remains open from 12 PM to 8 PM, offering ample time to browse 
                    its curated collections or participate in one of its cultural events.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: '250px', margin: '0 auto' }}>
                      <Image
                        src="/assets/img/topten/topten_map.png" // Replace with the actual image path
                        alt="Google Map Location"
                        className="img-fluid"
                        width={200}
                        height={200}
                        priority
                      />
                      <div className="proj-txtx">
                        <h4 className="font-itckabelM">Store Location</h4>
                        <span>Find them near the heart of the Bishop Arts District.</span>
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