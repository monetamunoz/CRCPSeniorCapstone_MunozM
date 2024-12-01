import React from "react";
import NavBar from "../NavBar";
import Banner from "./OffTheRecordBanner";
import LearnMore from "./OffTheRecordLearnMore";
import Footer from "./OffTheRecordFooter";

const OffTheRecord = () => {
  return (
    <div className="OffTheRecord">
      <NavBar />
      <Banner />
      <LearnMore/>
      <Footer />
    </div>
  );
};

export default OffTheRecord;
