"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the offtherecord component
const OffTheRecord = dynamic(() => import("@/components/stores/offtherecord/OffTheRecord"), {
  ssr: false, // Disable server-side rendering if not required
});

const OffTheRecordPage = () => {
  return (
    <div>
      <OffTheRecord />
    </div>
  );
};

export default OffTheRecordPage;
