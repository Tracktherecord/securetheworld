import { Shield, Search, Lock, FileText, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
              SecureTheWorld
            </span>
          </div>
          
          {/* Service Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Application Security
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              VAPT Services
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Security
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Lock className="w-4 h-4 mr-2" />
              Compliance
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
            onClick={() => scrollToSection('services')}
          >
            <Shield className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;