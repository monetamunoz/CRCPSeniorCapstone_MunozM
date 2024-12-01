import React from "react";
import NavBar from "../NavBar";
import Banner from "./SpinsterBanner";
import LearnMore from "./SpinsterLearnMore";
import Footer from "./SpinsterFooter";

const Spinster = () => {
  return (
    <div className="Spinster">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default Spinster;
