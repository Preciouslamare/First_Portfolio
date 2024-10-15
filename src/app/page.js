import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageSection from "./about/PageSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
   
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <Footer/>
        <div class="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <PageSection />
          <EmailSection />
        </div>
        
      </main>
      
  );
}
