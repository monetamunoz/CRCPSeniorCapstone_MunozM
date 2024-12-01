"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Dead Wax component
const DeadWax = dynamic(() => import("@/components/stores/deadwax/DeadWax"), {
  ssr: false, // Disable server-side rendering if not required
});

const DeadWaxPage = () => {
  return (
    <div>
      <DeadWax />
    </div>
  );
};

export default DeadWaxPage;
