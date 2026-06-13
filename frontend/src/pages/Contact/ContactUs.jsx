import Navbar from "@/components/Navbar/navbar";
import SocialSidebar from "@/components/Navbar/SocialSidebar";
import Footer from "@/components/Footer/Footer";
import Hero from "./Hero";
import ContactForm from "./email";
import ConnectSection from "./connect";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <ContactForm />
      <ConnectSection />
      <Footer />
    </>
  );
}