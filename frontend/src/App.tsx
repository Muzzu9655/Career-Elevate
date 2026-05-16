import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import HowItWorks from "@/sections/HowItWorks";
import WhyUs from "@/sections/WhyUs";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}