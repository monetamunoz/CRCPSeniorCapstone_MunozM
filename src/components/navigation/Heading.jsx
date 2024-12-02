import React from "react";
import DropdownMenu from "@/components/navigation/DropdownMenu";
import Sound from "@/components/Sound";

const Heading = ({ toggleMusic, isPlaying }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-homeBar shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Dropdown Menu */}
        <div className="flex items-center">
          <DropdownMenu />
        </div>

        {/* Title */}
        <h1
          style={{ letterSpacing: "0.25rem" }}
          className="text-5xl text-gray-800 -mb-2 font-itckabel text-center flex-1"
        >
          Dallas Record Store Guide
        </h1>

        {/* Sound Bar */}
        <div className="flex items-center">
          <Sound toggleMusic={toggleMusic} isPlaying={isPlaying} />
        </div>
      </div>
    </div>
  );z
};

export default Heading;

