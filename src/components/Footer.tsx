import { Shield, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/20 relative">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary cyber-glow" />
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-cyber-gradient bg-clip-text text-transparent">SECURE</span>
                <span className="text-foreground">THE</span>
                <span className="bg-cyber-gradient bg-clip-text text-transparent">WORLD</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading cybersecurity firm providing comprehensive protection solutions 
              for modern digital infrastructure and applications.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Application Security VAPT</li>
              <li>Infrastructure Security</li>
              <li>Compliance Management</li>
              <li>Vulnerability Assessment</li>
              <li>Cloud Security</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>HIPAA Compliance</li>
              <li>GDPR Compliance</li>
              <li>ISO27K Standards</li>
              <li>SOC2 Type1</li>
              <li>Container Security</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SecureTheWorld. All rights reserved. Protecting your digital future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;