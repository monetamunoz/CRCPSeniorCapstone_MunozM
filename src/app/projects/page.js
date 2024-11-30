import Image from "next/image";
import bg from "../../../public/background/test3.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../data";
import RenderModel from "@/components/RenderModel";
import VinylRecord from "@/components/models/Vinylrecord"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <ProjectList projects={projectsData}/>
      <RenderModel>
        <VinylRecord/>
      </RenderModel>
      
    </main>
  );
}