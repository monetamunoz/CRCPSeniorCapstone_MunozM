"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Good component
const Good = dynamic(() => import("@/components/stores/good/Good"), {
  ssr: false, // Disable server-side rendering if not required
});

const GoodPage = () => {
  return (
    <div>
      <Good />
    </div>
  );
};

export default GoodPage;
