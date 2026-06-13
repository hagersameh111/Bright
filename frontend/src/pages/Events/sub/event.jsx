import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";
import Footer from "@/components/Footer/Footer";
import Hero from "./hero";
import EventAbout from "./about";
import EventSchedule from "./EventSchedule";
import SponsorCTA from "./sponser";



export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <EventAbout />
      <EventSchedule />
      <SponsorCTA />
     
      <Footer />
    </>
  );
}