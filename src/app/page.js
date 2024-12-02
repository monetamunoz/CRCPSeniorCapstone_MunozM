"use client";
import Image from "next/image";
import RenderModel from "../components/RenderModel";
import Navigation from "../components/navigation";
import FloatingBackground from "@/components/FloatingBackground";
import Heading from "@/components/navigation/Heading"
import bg from "../../public/background/test3.png";
import { useEffect } from "react";

import dynamic from "next/dynamic";
//mport Vinylstack from "@/components/models/Vinylstack";
const VinylRecord = dynamic(() => import("../components/models/Vinylrecord"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url('${bg.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Fixes the background
        }}
        className="-z-50 w-full h-full fixed"
      />
     
      {/* Top White Bar */}
      <Heading/>

      {/* Main Content */}
      <div className="w-full h-screen mt-20">
        <Navigation className='relative -m-8'/>
        <RenderModel>
          <VinylRecord/>
          {/* <Vinylstack/> */}
        </RenderModel>
      </div>

      {/* Bottom White Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-homeBar shadow-lg z-100">
        <div className="max-w-7xl mx-auto flex items-center justify-center py-2 px-2"/>
      </div>
    </main>
  );
}
