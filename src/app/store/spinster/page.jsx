"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Spinster component
const Spinster = dynamic(() => import("@/components/stores/spinster/Spinster"), {
  ssr: false, // Disable server-side rendering if not required
});

const SpinsterPage = () => {
  return (
    <div>
      <Spinster />
    </div>
  );
};

export default SpinsterPage;
