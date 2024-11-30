"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Function to get icons for dropdown items
const getIcon = (icon) => {
  switch (icon) {
    case "Spinster Records":
      return <Image src="/icons/spinster.png" alt="Spinster Records" width={20} height={20} />;
    case "Top-Ten Records":
      return <Image src="/icons/topten.webp" alt="Top-Ten Records" width={20} height={20} />;
    case "Good Records":
      return <Image src="/icons/goodrecords.png" alt="Good Records" width={20} height={20} />;
    case "Josey Records - Farmers Branch":
      return <Image src="/icons/joseyrecords.png" alt="Josey Records - Farmers Branch" width={20} height={20} />;
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

const additionalLinks = [
  { label: "Spinster Records", link: "/", icon: "Spinster Records", newTab: false },
  { label: "Top-Ten Records", link: "/about", icon: "Top-Ten Records", newTab: false },
  { label: "Good Records", link: "/projects", icon: "Good Records", newTab: false },
  { label: "Josey Records - Farmers Branch", link: "/contact", icon: "Josey Records - Farmers Branch", newTab: false },
  { label: "Dead Wax Records", link: "https://www.github.com/codebucks27", icon: "Dead Wax Records", newTab: true },
  { label: "Off the Record", link: "https://www.linkedin.com/in/codebucks", icon: "Off the Record", newTab: true },
  { label: "Black Cat Records", link: "https://www.x.com/code_bucks", icon: "Black Cat Records", newTab: true },
  { label: "The Spin", link: "/resume.pdf", icon: "The Spin", newTab: true },
];

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
        className="text-gray-800 font-itckabelM rounded-full flex items-center justify-center
                   hover:bg-white/20 transition-all px-4 py-2"
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
          className="mt-2 bg-homeBar/20 border border-homeBar/30 rounded-lg shadow-glass-inset backdrop-blur-sm"
        >
          {additionalLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target={link.newTab ? "_blank" : "_self"}
              className="font-itckabelM text-gray-800 flex items-center gap-2 p-2 hover:bg-accent/20 border border-transparent rounded transition-all"
            >
              {/* Add the icon before the label */}
              {getIcon(link.icon)}
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
