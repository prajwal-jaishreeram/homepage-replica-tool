import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "On the Way",
      description: "AI Job Brief analyzes service history and prepares diagnostics during your drive time",
      icon: "🚗"
    },
    {
      number: "02", 
      title: "During Service",
      description: "Snap photos of HVAC equipment for instant AI-powered diagnostics and recommendations",
      icon: "📱"
    },
    {
      number: "03",
      title: "Before Leaving", 
      description: "AI summary ensures nothing is missed and identifies cross-trade opportunities",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-hero-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform every service call with AI that works seamlessly with your existing workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">{step.icon}</div>
                <div className="text-sm font-bold text-tech-blue mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arrow connectors for desktop */}
        <div className="hidden md:flex justify-center items-center mt-8 space-x-32">
          <svg className="w-12 h-6 text-tech-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
          <svg className="w-12 h-6 text-tech-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};