import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedResorts from "./components/FeaturedResorts";
import Experiences from "./components/Experiences";
import Offers from "./components/Offers";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <div className="h-24 bg-[#F8F6F2]" />

      <FeaturedResorts />

      <div className="h-24 bg-[#F8F6F2]" />

      <Experiences />

      <div className="h-24 bg-[#F8F6F2]" />

      <Offers />

      <div className="h-24 bg-[#F8F6F2]" />

      <Stats />

      <div className="h-24 bg-[#F8F6F2]" />

      <Testimonials />

      <div className="h-24 bg-[#F8F6F2]" />

      <Footer />

    </main>
  );
}