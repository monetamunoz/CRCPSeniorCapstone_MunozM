"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import Image from "next/image";
import "animate.css"; // Animation CSS

export const Projects = () => {
  const projects = [
    {
      // Extensive Vinyl and Comic Collection
      title: "Extensive Vinyl and Comic Collection",
      description: "Explore a curated selection of vinyl records and comics, including rare and imported finds.",
      imgUrl: "/assets/img/blackcat/blackcat_collection.jpg",
    },
    {
      // Manga and Comics Specialization
      title: "Manga and Comics Specialization",
      description: "Discover a vast collection of manga and comics, spanning decades and genres.",
      imgUrl: "/assets/img/blackcat/blackcat_manga.jpg",
    },
    {
      // Pop Culture Collectibles
      title: "Pop Culture Collectibles",
      description: "Find figurines, shirts, and merchandise inspired by music and comics.",
      imgUrl: "/assets/img/blackcat/blackcat_collectibles.jpg",
    },
    {
      // Beer and Browsing
      title: "Beer and Browsing",
      description: "Enjoy a beer or cider while exploring records, comics, and collectibles.",
      imgUrl: "/assets/img/blackcat/blackcat_beer.jpg",
    },
    {
      // Live Events and Listening Stations
      title: "Live Events and Listening Stations",
      description: "Attend live music events, podcasts, and DJ sets, or preview records at spinning stations.",
      imgUrl: "/assets/img/blackcat/blackcat_events.jpg",
    },
    {
      // Community-Centric Environment
      title: "Community-Centric Environment",
      description: "A welcoming space for pop culture lovers to connect and explore shared passions.",
      imgUrl: "/assets/img/blackcat/blackcat_community.jpg",
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
              Black Cat Records & Comics offers a distinctive blend of music, comics, and pop culture, creating a space that celebrates creativity, nostalgia, and discovery. The store features an extensive selection of vinyl records, including rare Japanese imports, timeless classics, and niche genres, as well as a comprehensive collection of manga, comics, and independent publications. With its carefully curated offerings, Black Cat Records & Comics appeals to both seasoned collectors and newcomers alike.
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
                    Black Cat Records and Comics is a one-of-a-kind destination for music lovers, comic enthusiasts, and pop culture aficionados. Co-founded by Megan Daniel, a manga and anime expert, and Guy Steele, a seasoned collector and former owner of Stage & Screen, the store brings together a carefully curated selection of vinyl records, comics, and collectibles. From Japanese imports and indie publishers to the newest and most popular titles, Black Cat offers something for everyone. Their extensive collection spans genres and decades, with a special focus on manga, horror, and underground comics.
                      </p>
                      <p>
                      The music section is equally impressive, featuring a diverse range of vinyl, from rare Japanese city pop and ambient music to punk, jazz, and metal. Customers can explore weekly playlists, spin records at dedicated listening stations, or enjoy live music events with local bands and DJs. Black Cat goes beyond retail by fostering a welcoming space where you can grab a beer, browse unique merchandise, and connect with like-minded fans. Whether you’re seeking a nostalgic treasure or discovering your next obsession, Black Cat Records and Comics is a pop culture paradise.
                      </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                    Black Cat Records and Comics is conveniently located at 971 Botham Jean Blvd, Dallas, TX 75202, just a short distance from major landmarks and accessible from across the city. The store's central location makes it an ideal destination for vinyl collectors, comic enthusiasts, and pop culture lovers alike.
                    </p>
                    <p>
                    Open seven days a week, Black Cat offers flexible hours to accommodate any schedule. Whether you're dropping by for a quick browse or planning a leisurely afternoon of exploration, their welcoming environment is ready for you. The store operates Monday from 12:00 PM to 4:00 PM, Tuesday through Thursday from 12:00 PM to 7:00 PM, and Sunday from 12:00 PM to 7:00 PM. For those looking to make the most of their weekends, extended hours are available on Friday and Saturday, from 11:00 AM to 9:00 PM.
                    </p>
                    <div className="proj-imgbx" style={{ maxWidth: '250px', margin: '0 auto' }}>
                      <Image
                        src="/assets/img/blackcat/blackcat_map.png" // Replace with the actual image path
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
