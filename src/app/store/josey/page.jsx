"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Josey component
const Josey = dynamic(() => import("@/components/stores/josey/Josey"), {
  ssr: false, // Disable server-side rendering if not required
});

const JoseyPage = () => {
  return (
    <div>
      <Spinster />
    </div>
  );
};

export default JoseyPage;
