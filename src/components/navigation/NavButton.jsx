import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Music } from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "Spinster Records":
      return <Image src="/icons/spinster.png" alt="Spinster Records" width={50} height={50} />;
    case "Top-Ten Records":
      return <Image src="/icons/topten.webp" alt="Top-Ten Records" width={50} height={50} />;
    case "Good Records":
      return <Image src="/icons/goodrecords.png" alt="Good Records" width={50} height={50} />;
    case "Josey Records - Farmers Branch":
      return <Image src="/icons/joseyrecords.png" alt="Josey Records - Farmers Branch" width={50} height={50} />;
    case "Dead Wax Records":
      return <Image src="/icons/deadwaxrecords.png" alt="Dead Wax Records" width={50} height={50} />;
    case "Off the Record":
      return <Image src="/icons/offtherecordbeer.png" alt="Off the Record" width={50} height={50} />;
    case "Black Cat Records":
      return <Image src="/icons/blackcatrecords.png" alt="Black Cat Records" width={50} height={50} />;
    case "The Spin":
      return <Image src="/icons/thespin.png" alt="The Spin" width={50} height={50} />;
    default:
      return <Music className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50 flex items-center justify-center"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      {/* Centered Container for Vinyl Disk Border */}
      <div className="relative flex items-center justify-center animate-spin-slow-reverse w-24 h-24">
        {/* Vinyl Disk Border */}
        <Image
          src="/icons/vinylouterdisk.png"
          alt="Vinyl Disk Border"
          fill // Updated to replace layout="fill"
          style={{ objectFit: "contain" }} // Updated to replace objectFit="contain"
        />

        {/* Main NavButton */}
        <Link
          href={link}
          target={newTab ? "_blank" : "_self"}
          className="text-foreground rounded-full flex items-center justify-center
            bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
            shadow-glass-inset hover:shadow-glass-sm animate-spin-slow-reverse"
          aria-label={label}
          name={label}
        >
          <span className="relative w-16 h-16 p-2 rounded-full animate-spin-slow-reverse flex items-center justify-center bg-background/20">
            {getIcon(icon)}

            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

            <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
            bg-background font-itckabelM text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
              {label}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavButton;
