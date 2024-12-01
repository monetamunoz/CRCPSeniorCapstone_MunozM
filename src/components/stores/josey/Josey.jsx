import React from "react";
import NavBar from "../NavBar";
import Banner from "./JoseyBanner";
import LearnMore from "./JoseyLearnMore";
import Footer from "./JoseyFooter";

const Josey = () => {
  return (
    <div className="Josey">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default Josey;
