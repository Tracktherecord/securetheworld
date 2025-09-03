import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Server, 
  Code, 
  Shield, 
  Network,
  FileText,
  Cloud,
  Container,
  CheckCircle,
  Zap
} from "lucide-react";
import appSecurity from "@/assets/app-security.jpg";
import networkSecurity from "@/assets/network-security.jpg";
import compliance from "@/assets/compliance.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Application Security VAPT",
      description: "Comprehensive vulnerability assessment and penetration testing for all your applications",
      image: appSecurity,
      icon: Smartphone,
      items: [
        "Web Application VAPT",
        "Mobile (Android & iOS) Application VAPT", 
        "API VAPT"
      ],
      gradient: "from-primary/20 to-primary-glow/20"
    },
    {
      title: "Infrastructure & Code Security",
      description: "Protect your infrastructure and codebase from vulnerabilities and threats",
      image: networkSecurity,
      icon: Server,
      items: [
        "Network VAPT",
        "Source Code Security (SCA, Secrets, SAST)",
        "Server & System Hardening (Compliance)"
      ],
      gradient: "from-accent/20 to-accent-glow/20"
    },
    {
      title: "Security Management & Compliance", 
      description: "Complete security governance and regulatory compliance solutions",
      image: compliance,
      icon: FileText,
      items: [
        "Vulnerability Management & Patch management",
        "Compliance Management (HIPAA, GDPR, ISO27K, SOC2 Type1)",
        "Cloud Configuration Assessment (Azure)",
        "Container Security (Docker, Kubernetes)"
      ],
      gradient: "from-primary-glow/20 to-accent/20"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-fade-in">
            <Shield className="mr-2 w-4 h-4" />
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
            Comprehensive 
            <span className="bg-cyber-gradient bg-clip-text text-transparent"> Cybersecurity </span>
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-right">
            Protecting your digital ecosystem with cutting-edge security solutions and industry-leading expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 card-shadow animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <Zap className="mr-2 w-4 h-4" />
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;