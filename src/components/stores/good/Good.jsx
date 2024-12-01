import React from "react";
import NavBar from "../NavBar";
import Banner from "./GoodBanner";
import LearnMore from "./GoodLearnMore";
import Footer from "./GoodFooter";

const Good = () => {
  return (
    <div className="Good">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default Good;
