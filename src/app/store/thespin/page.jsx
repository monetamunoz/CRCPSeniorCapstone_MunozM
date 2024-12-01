"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the TheSpin component
const TheSpin = dynamic(() => import("@/components/stores/thespin/TheSpin"), {
  ssr: false, // Disable server-side rendering if not required
});

const TheSpinPage = () => {
  return (
    <div>
      <TheSpin />
    </div>
  );
};

export default TheSpinPage;
