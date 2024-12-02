"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BtnList } from "@/app/data"; 


// Function to get icons for dropdown items
const getIcon = (icon) => {
  switch (icon) {
    case "Spinster Records":
      return <Image src="/icons/spinster.png" alt="Spinster Records" width={20} height={20} />;
    case "Top-Ten Records":
      return <Image src="/icons/topten.webp" alt="Top-Ten Records" width={20} height={20} />;
    case "Good Records":
      return <Image src="/icons/goodrecords.png" alt="Good Records" width={20} height={20} />;
    case "Josey Records - Dallas":
      return <Image src="/icons/joseyrecords.png" alt="Josey Records - DALLAS" width={20} height={20} />;
    case "Dead Wax Records":
      return <Image src="/icons/deadwaxrecords.png" alt="Dead Wax Records" width={20} height={20} />;
    case "Off the Record":
      return <Image src="/icons/offtherecordbeer.png" alt="Off the Record" width={20} height={20} />;
    case "Black Cat Records":
      return <Image src="/icons/blackcatrecords.png" alt="Black Cat Records" width={20} height={20} />;
    case "The Spin":
      return <Image src="/icons/thespin.png" alt="The Spin" width={20} height={20} />;
    default:
      return null;
  }
};

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="absolute top-4 left-5 z-50">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="text-gray-800 font-itckabelM bg-homeBar/50 hover:bg-homeBar/80 text-gray-800 px-4 py-2 rounded-lg shadow-md transition-all"
      >
        Record Stores
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute mt-2 bg-homeBar/50 backdrop-blur-md rounded-lg shadow-lg w-48"
        >
          {BtnList.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target={link.newTab ? "_blank" : "_self"}
              className="font-itckabelM text-gray-800 flex items-center gap-1 pl-3 py-2 hover:bg-homeBar/90 text-dark rounded transition-all"
            >
              {/* Add the icon before the label */}
              {getIcon(link.icon)}
              <span className="font-itckabelM">{link.label}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
