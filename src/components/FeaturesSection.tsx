import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Real-time Diagnostics",
      description: "Instant analysis from equipment photos using 15M+ HVAC manuals",
      icon: "⚡",
      badge: "AI-Powered"
    },
    {
      title: "Cross-trade Opportunities", 
      description: "Identify electrical, plumbing, and other revenue opportunities automatically",
      icon: "💰",
      badge: "Revenue+"
    },
    {
      title: "ServiceTitan Integration",
      description: "Seamless workflow integration with your existing service management platform",
      icon: "🔧",
      badge: "Integration"
    },
    {
      title: "Step-by-Step Guidance",
      description: "AI provides detailed repair instructions and parts recommendations",
      icon: "📋",
      badge: "Guidance"
    },
    {
      title: "Service Call Summaries",
      description: "Automated documentation and recommendations for follow-up work",
      icon: "📝", 
      badge: "Documentation"
    },
    {
      title: "Zero Setup Cost",
      description: "5-minute deployment with no hardware or infrastructure requirements",
      icon: "🚀",
      badge: "Easy Setup"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="text-tech-blue"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful AI features designed specifically for HVAC professionals to increase efficiency and revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-hero-accent px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-foreground">Reduce Callbacks & Repeat Visits</span>
            <div className="w-2 h-2 bg-success-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};