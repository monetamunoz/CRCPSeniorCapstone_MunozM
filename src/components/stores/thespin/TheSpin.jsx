import React from "react";
import NavBar from "../NavBar";
import Banner from "./TheSpinBanner";
import LearnMore from "./TheSpinLearnMore";
import Footer from "./TheSpinFooter";

const TheSpin = () => {
  return (
    <div className="TheSpin">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default TheSpin;
