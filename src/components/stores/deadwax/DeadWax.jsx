import React from "react";
import NavBar from "../NavBar";
import Banner from "./DeadWaxBanner";
import LearnMore from "./DeadWaxLearnMore";
import Footer from "./DeadWaxFooter";

const DeadWax = () => {
  return (
    <div className="BlackCat">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default DeadWax;
