import { useState } from "react";

import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";
import Footer from "@/components/Footer/Footer";
import ProjectsGrid from "./ProjectsGrid";
import Hero from "./Hero";
import ProjectsFilter from "./ProjectsFilter";
import ProjectProcess from "./ProjectProcess";
import ClientLogos from "./ClientLogos";
import ProjectStats from "./ProjectStats";
import ProjectsCTA from "./ProjectsCTA";
export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  return (
    <>
      <Navbar />
      <SocialSidebar />

      <Hero />

      <ProjectsGrid activeCategory={activeCategory} />
      <ProjectProcess />
      <ClientLogos />
      <ProjectStats />
      <ProjectsCTA />
      <Footer />
    </>
  );
}