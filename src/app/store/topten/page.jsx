"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the TopTen component
const TopTen = dynamic(() => import("@/components/stores/topten/TopTen"), {
  ssr: false, // Disable server-side rendering if not required
});

const TopTenPage = () => {
  return (
    <div>
      <TopTen />
    </div>
  );
};

export default TopTenPage;
