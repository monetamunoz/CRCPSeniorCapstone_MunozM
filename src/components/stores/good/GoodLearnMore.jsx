"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    {
      title: "Vinyl Collection",
      description: "Explore a diverse range of new and used vinyl records across various genres.",
      imgUrl: "/assets/img/good/good_vinyl.jpg",
    },
    {
      title: "Live Performances",
      description: "Experience intimate in-store performances by renowned and local artists.",
      imgUrl: "/assets/img/good/good_stage.jpg",
    },
    {
      title: "Pioneers of Vinyl Revival",
      description: "Proud supporters of Record Store Day and champions of Dallas&apos; vinyl culture.",
      imgUrl: "/assets/img/good/good_champion.jpg",
    },
    {
      title: "Sell Your Vinyl",
      description: "Trade your vinyl for cash or store credit with fair and customer-oriented offers.",
      imgUrl: "/assets/img/good/good_used.jpg",
    },
    {
      title: "Colorful Store Vibes",
      description: "Enjoy vibrant decor with yellow racks, colorful lighting, and a retro stage.",
      imgUrl: "/assets/img/good/good_vibes.jpg",
    },
    {
      title: "Record Store Day Participant",
      description: "Join for exclusive vinyl releases and events on RSD.",
      imgUrl: "/assets/img/good/good_rsd.jpg",
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
                Good Records is more than just a record store; it&apos;s a cornerstone of Dallas&apos; music scene and a vibrant haven for vinyl enthusiasts. 
                Since opening in 2000, the store has championed the city&apos;s vinyl revival with a curated selection of new and used records spanning 
                genres from indie rock to Motown and jazz.
              </p>
              <p>
                Its colorful racks, adorned with yellow paint and vibrant light bulbs, reflect the eclectic 
                energy of its collection and the community it serves. Good Records is also a hub for live music, hosting intimate performances by both 
                local and renowned artists, fostering a space where music and culture thrive.
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
                      Since its establishment on February 7, 2000, Good Records has been a cornerstone of Dallas&apos; music scene, championing the city&apos;s vinyl revival 
                      and becoming a must-visit destination for record enthusiasts. This vibrant store is a treasure trove for 
                      music lovers, offering a carefully curated selection of new and used records, CDs, DVDs, and turntables. Known for its iconic racks painted 
                      in yellow and adorned with colored light bulbs, Good Records delivers an unforgettable shopping experience that blends nostalgia with discovery.
                    </p>
                    <p>
                      Good Records has also made a name for itself as a hub for live music. The store&apos;s back-stage area, often used as a listening center, 
                      transforms into an intimate venue for performances by both local and touring bands. Over the years, it has hosted an impressive lineup 
                      of artists, including St. Vincent, Erykah Badu, Death Cab for Cutie, and Queens of the Stone Age, cementing its place as a cultural 
                      landmark in the Dallas music community. Whether you&apos;re browsing their shelves for obscure gems, picking up an order, or enjoying a live set, 
                      Good Records is more than a store—it&apos;s a celebration of music and the community it inspires.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Good Records is conveniently located at 9026 Garland Road, Dallas, TX, in a vibrant area that&apos;s easily accessible for locals and visitors alike. 
                      Open seven days a week from 12:00 PM to 8:00 PM, the store provides a welcoming space for music lovers to explore its extensive collection of 
                      new and used records, CDs, and other media. Whether you&apos;re stopping by for in-store shopping, picking up a local order, or browsing for your next 
                      favorite album, Good Records ensures an enjoyable and seamless experience. Its iconic yellow racks and colorful atmosphere make it a standout 
                      destination for anyone passionate about music and vinyl culture.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: "250px", margin: "0 auto" }}>
                      <Image
                        src="/assets/img/good/good_map.png" // Replace with the actual image path
                        alt="Google Map Location"
                        className="img-fluid"
                        width={200}
                        height={200}
                        priority
                      />
                      <div className="proj-txtx">
                        <h4 className="font-itckabelM">Store Location</h4>
                        <span>Find them near White Rock Lake.</span>
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
