import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";
import Footer from "@/components/Footer/Footer";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./services";
import CTASection from "./ctasection";


export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <AboutSection />
      <ServicesSection />
        <CTASection />
      <Footer />
    </>
  );
}