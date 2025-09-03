import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CyberBackground />
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
