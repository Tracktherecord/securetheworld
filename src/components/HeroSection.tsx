import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye } from "lucide-react";
import cyberHero from "@/assets/cyber-hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero image backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cyberHero} 
          alt="Cybersecurity Network"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-dark-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <Shield className="w-24 h-24 text-primary animate-glow-pulse" />
            <div className="absolute -top-2 -right-2">
              <Lock className="w-8 h-8 text-accent animate-float" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-cyber-gradient bg-clip-text text-transparent">
            SECURE
          </span>
          <span className="text-foreground">THE</span>
          <span className="bg-cyber-gradient bg-clip-text text-transparent">
            WORLD
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-left">
          Comprehensive Cybersecurity Services to Protect Your Digital Assets
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto animate-slide-in-right">
          From application security to infrastructure protection, we provide end-to-end cybersecurity solutions 
          that keep your business safe from evolving threats.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button variant="cyber" size="lg" className="group">
            <Eye className="mr-2 group-hover:scale-110 transition-transform" />
            Explore Our Services
          </Button>
          <Button variant="outline" size="lg">
            <Shield className="mr-2" />
            Get Security Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;