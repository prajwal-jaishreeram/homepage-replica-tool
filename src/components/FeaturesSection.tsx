import React from "react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Users, FileText, Clipboard } from "lucide-react";

export const FeaturesSection = () => {
  const features: BentoItem[] = [
    {
      title: "Know Your Customer",
      meta: "ERP-Powered Customer Intelligence",
      description: "NOSO analyzes your internal data and ERP systems to automatically brief technicians before each service call. Get instant access to customer history, preferences, past issues, and service patterns to deliver personalized service and identify the right upsell opportunities.",
      icon: <Users className="w-4 h-4 text-tech-blue" />,
      status: "Intelligence",
      tags: ["Customer", "ERP", "History"],
      cta: "Learn More →"
    },
    {
      title: "Know Every HVAC Unit",
      meta: "15M+ Manuals at Your Fingertips",
      description: "Our AI is trained on over 15 million equipment manuals and technical documents. Whether it's a 20-year-old unit or the latest model, NOSO provides instant access to specifications, troubleshooting guides, and repair procedures for any HVAC system your techs encounter.",
      icon: <FileText className="w-4 h-4 text-success-green" />,
      status: "Knowledge Base",
      tags: ["Manuals", "AI", "Equipment"],
      cta: "Explore →"
    },
    {
      title: "Know Your Workflow", 
      meta: "Smart Summaries & Sales Intelligence",
      description: "NOSO automatically generates professional job summaries and intelligently highlights sales opportunities during your proposal process. Transform voice notes into polished reports while identifying additional services and follow-up opportunities that maximize revenue per call.",
      icon: <Clipboard className="w-4 h-4 text-purple-500" />,
      status: "Automation",
      tags: ["Voice-to-Doc", "Sales", "Reports"],
      cta: "Try Now →"
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
          <div className="inline-flex items-center space-x-2 bg-special-section-bg px-6 py-3 rounded-full border border-foreground dark:border-border">
            <span className="text-sm font-medium text-foreground">Voice-to-documentation: Record your observations and let NOSO handle all the paperwork, ensuring nothing falls through the cracks.</span>
            <div className="w-2 h-2 bg-success-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};