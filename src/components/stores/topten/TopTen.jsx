import React from "react";
import NavBar from "../NavBar";
import Banner from "./TopTenBanner";
import LearnMore from "./TopTenLearnMore";
import Footer from "./TopTenFooter";

const TopTen = () => {
  return (
    <div className="TopTen">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default TopTen;
