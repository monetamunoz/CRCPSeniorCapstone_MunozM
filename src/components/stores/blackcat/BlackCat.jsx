import React from "react";
import NavBar from "../NavBar";
import Banner from "./BlackCatBanner";
import LearnMore from "./BlackCatLearnMore";
import Footer from "./BlackCatFooter";

const BlackCat = () => {
  return (
    <div className="BlackCat">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default BlackCat;
