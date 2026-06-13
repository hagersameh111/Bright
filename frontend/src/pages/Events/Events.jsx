import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";
import Footer from "@/components/Footer/Footer";
import Hero from "./Hero";
import EventsListing from "./Eventlist";


export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <EventsListing />
      <Footer />
    </>
  );
}