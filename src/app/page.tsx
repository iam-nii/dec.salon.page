import AboutSection from "./ui/components/AboutSection";
import FooterSection from "./ui/components/FooterSection";
import GallerySection from "./ui/components/GallerySection";
import HeroSection from "./ui/components/HeroSection";
import Navbar from "./ui/components/Navbar";
import ServicesSection from "./ui/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <FooterSection />
      </main>
    </div>
  );
}
