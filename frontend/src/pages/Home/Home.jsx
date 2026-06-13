import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/pages/Home/Hero";
import WhoWeAre from "@/pages/Home/WhoWeAre";
import LatestProjects from "./projects";
import OurClients from "./ourClients";
import BreakingNewsBar from "./HomeNewsBar";
import BusinessDevelopment from "./BusinessDevelopment";


export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <BreakingNewsBar />
      <WhoWeAre />
      <LatestProjects /> 
       <BusinessDevelopment />
      <OurClients />
      <Footer />
    </>
  );
}