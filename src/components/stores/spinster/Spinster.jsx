import React from "react";
import NavBar from "../NavBar";
import Banner from "./SpinsterBanner";

import Projects from "./SpinsterLearnMore";

import Footer from "./SpinsterFooter";

const Spinster = () => {
  return (
    <div className="Spinster">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Spinster;
