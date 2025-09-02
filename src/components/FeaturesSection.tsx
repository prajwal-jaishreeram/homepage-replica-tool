import React from "react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Zap, DollarSign, Wrench, Clipboard, FileText, Smartphone, Users, Clock } from "lucide-react";

export const FeaturesSection = () => {
  const features: BentoItem[] = [
    {
      title: "Real-time Diagnostics",
      meta: "15M+ manuals",
      description: "Instant analysis from equipment photos using 15M+ HVAC manuals",
      icon: <Zap className="w-4 h-4 text-tech-blue" />,
      status: "AI-Powered",
      tags: ["Instant", "AI", "Photos"],
      colSpan: 2,
      hasPersistentHover: true,
      cta: "Try Now →"
    },
    {
      title: "Cross-trade Revenue",
      meta: "5-10% boost",
      description: "Identify electrical, plumbing, and other revenue opportunities automatically",
      icon: <DollarSign className="w-4 h-4 text-success-green" />,
      status: "Revenue+",
      tags: ["Revenue", "Cross-trade"],
      cta: "Learn More →"
    },
    {
      title: "ServiceTitan Integration", 
      meta: "seamless",
      description: "Seamless workflow integration with your existing service management platform",
      icon: <Wrench className="w-4 h-4 text-orange-500" />,
      status: "Integration",
      tags: ["ServiceTitan", "Workflow"],
      colSpan: 2,
      cta: "Connect →"
    },
    {
      title: "Step-by-Step Guidance",
      meta: "expert level",
      description: "AI provides detailed repair instructions and parts recommendations",
      icon: <Clipboard className="w-4 h-4 text-purple-500" />,
      status: "Guidance",
      tags: ["Instructions", "Parts"],
      cta: "Guide Me →"
    },
    {
      title: "Smart Documentation",
      meta: "automated",
      description: "Automated service call summaries and recommendations for follow-up work",
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      status: "Auto",
      tags: ["Documentation", "Follow-up"]
    },
    {
      title: "Mobile First",
      meta: "5-min setup",
      description: "5-minute deployment with no hardware or infrastructure requirements",
      icon: <Smartphone className="w-4 h-4 text-green-500" />,
      status: "Ready",
      tags: ["Mobile", "Quick"],
      colSpan: 2
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Turn every technician into an expert with AI-powered diagnostics and revenue optimization tools
          </p>
        </div>

        <BentoGrid items={features} />

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-secondary px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-foreground">Reduce Callbacks & Repeat Visits</span>
            <div className="w-2 h-2 bg-success-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};