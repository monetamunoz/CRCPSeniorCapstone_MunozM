"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Black Cat component
const BlackCat = dynamic(() => import("@/components/stores/blackcat/BlackCat"), {
  ssr: false, // Disable server-side rendering if not required
});

const BlackCatPage = () => {
  return (
    <div>
      <BlackCat />
    </div>
  );
};

export default BlackCatPage;
