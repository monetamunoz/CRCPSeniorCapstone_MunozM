"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
    const projects = [
        {
          // Expansive Vinyl Collection
          title: "Expansive Vinyl Collection",
          description: "Explore new releases, rare finds, and curated collections across all genres.",
          imgUrl: "/assets/img/josey/josey_expansive.jpg",
        },
        {
          // Massive Store Space
          title: "Massive Store Space",
          description: "Immerse yourself in a 25,000-square-foot layout, one of the largest in the country.",
          imgUrl: "/assets/img/josey/josey_store.jpg",
        },
        {
          // Live Music and Events
          title: "Live Music and Events",
          description: "Enjoy in-house performances, DJ sets, and interactive events in a lively atmosphere.",
          imgUrl: "/assets/img/josey/josey_perform.jpg",
        },
        {
          // Buy & Sell Services
          title: "Buy & Sell Services",
          description: "Sell your records, CDs, and turntables or find great additions to your collection.",
          imgUrl: "/assets/img/josey/josey_sell.jpg",
        },
        {
          // Record Store Day Participant
          title: "Record Store Day Participant",
          description: "Celebrate with exclusive releases and exciting in-store events.",
          imgUrl: "/assets/img/josey/josey_rsd.jpg",
        },
        {
            // Community-Centric Focus
            title: "Community-Centric Focus",
            description: "Support local artists, attend events, and connect with fellow music lovers in a welcoming space.",
            imgUrl: "/assets/img/josey/josey_community.jpg",
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
Josey Records is not just a record store; it’s a cultural destination for music lovers, collectors, and the Dallas-Fort Worth community. Spanning an impressive 25,000 square feet, it’s one of the largest record stores in the country and the go-to spot for both seasoned crate diggers and casual music enthusiasts. Offering an extensive collection of new and used vinyl, CDs, and tapes across every genre imaginable, Josey prides itself on being a treasure trove for those seeking rare gems, chart-topping hits, or nostalgic favorites. The store’s vibrant layout, complete with two live performance areas and a DJ booth, transforms it into a dynamic space that celebrates the art of music in all its forms.
</p>
<p>
Beyond its vast inventory, Josey Records stands out as a community hub, fostering connections between artists, music enthusiasts, and local culture. From hosting Record Store Day events and intimate live performances to preserving Texas music history through its archival projects, Josey is deeply committed to enriching the local music scene. Whether you’re there to explore its meticulously curated collections, sell your vinyl at the buy counter, or attend a live set, Josey Records offers a unique and immersive experience that resonates with every visitor. Join them in celebrating the enduring legacy and evolving culture of music.
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
                    Josey Records is more than a record store; it's a sprawling 25,000-square-foot haven for music lovers, crate diggers, 
                    and collectors alike. Located in Farmers Branch, TX, it stands as the largest record store in Texas and one of the top 
                    five largest in the country. Since opening its doors in 2014, Josey Records has become a cornerstone of Dallas’ music scene, 
                    offering an unparalleled selection of new and used vinyl, CDs, tapes, and turntables. Whether you're searching for a rare gem 
                    or browsing their expansive inventory, the store's friendly and knowledgeable staff are dedicated to helping you discover something special.
                    </p>
                    <p>
                    At Josey, the experience goes beyond shopping. With two live performance areas, a dedicated DJ booth, and plans for larger in-store concerts, 
                    the store has become a vibrant community space. Josey Records also champions the vinyl renaissance, maintaining its roots as a hub 
                    for collectors while embracing a new generation of enthusiasts. The store is home to exclusive Record Store Day events, its own record 
                    label, Skylark Soul Co., and a vinyl pressing plant, A&R Records, solidifying its role as a cultural landmark. Whether you're buying, 
                    selling, or simply exploring, Josey Records offers a unique and interactive journey through music.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                    Josey Records is conveniently located at 2821 Lyndon B Johnson Fwy, Suite 100, in Farmers Branch, TX, making it easily accessible from across 
                    the Dallas-Fort Worth metroplex. Situated near major highways, it’s the perfect destination for music lovers looking to explore an extensive 
                    collection or attend one of the store’s renowned events. Open seven days a week, Josey Records ensures a flexible shopping experience with hours 
                    tailored to fit your schedule: Sunday from 11:00 AM to 6:00 PM, Monday through Thursday from 10:00 AM to 9:00 PM, and Friday and Saturday from 10:00 AM to 10:00 PM. 
                    </p>
                    <p>
                    These hours offer ample time to browse their expansive inventory, enjoy live music, or trade in your vinyl. To further enhance accessibility, 
                    extending weekend hours to accommodate late-night shoppers and event-goers could make Josey an even more dynamic hub for the local music community. 
                    Whether you're stopping by for a quick visit or spending the day immersed in their vibrant atmosphere, Josey Records delivers a truly memorable experience for all.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: '250px', margin: '0 auto' }}>
                      <Image
                        src="/assets/img/josey/josey_map.png" // Replace with the actual image path
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