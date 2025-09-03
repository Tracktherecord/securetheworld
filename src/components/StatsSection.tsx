import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Shield,
      number: "500+",
      label: "Security Assessments Completed",
      color: "text-primary"
    },
    {
      icon: Users, 
      number: "100+",
      label: "Clients Protected",
      color: "text-accent"
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Threat Detection Rate",
      color: "text-primary-glow"
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Security Monitoring",
      color: "text-accent-glow"
    }
  ];

  return (
    <section className="py-24 relative bg-card/20">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-fade-in">
            <Award className="mr-2 w-4 h-4" />
            Proven Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-in-left">
            Trusted by
            <span className="bg-cyber-gradient bg-clip-text text-transparent"> Organizations </span>
            Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-cyber-gradient rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <stat.icon className={`w-10 h-10 ${stat.color} relative z-10 group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {stat.number}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;