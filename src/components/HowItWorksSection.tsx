import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Car, Smartphone, CheckCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn('group relative rounded-none shadow-zinc-950/5', className)}>
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

const CardHeading = ({ icon: Icon, title, description, number }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      <span className="text-xs font-bold">{number}</span>
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "On the Way",
      description: "AI Job Brief analyzes service history and prepares diagnostics during your drive time",
      icon: Car
    },
    {
      number: "02", 
      title: "During Service",
      description: "Snap photos of HVAC equipment for instant AI-powered diagnostics and recommendations",
      icon: Smartphone
    },
    {
      number: "03",
      title: "Before Leaving", 
      description: "AI summary ensures nothing is missed and identifies cross-trade opportunities",
      icon: CheckCircle
    }
  ];

  return (
    <section id="how-it-works" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform every service call with AI that works seamlessly with your existing workflow
          </p>
        </div>

        <div className="mx-auto grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FeatureCard key={index}>
              <CardHeader className="pb-3">
                <CardHeading
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  number={step.number}
                />
              </CardHeader>
              
              <div className="relative mb-6 border-t border-dashed sm:mb-0">
                <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)]"></div>
                <div className="aspect-[4/3] p-6 flex items-center justify-center">
                  <step.icon className="w-24 h-24 text-primary" />
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>

        <FeatureCard className="p-6 lg:col-span-1 mt-8">
          <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
            AI-powered workflow that adapts to your existing process
          </p>
          
          <div className="flex justify-center gap-6 overflow-hidden">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Car className="w-4 h-4 text-primary" />
              </div>
              <div className="w-2 h-0.5 bg-border"></div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-primary" />
              </div>
              <div className="w-2 h-0.5 bg-border"></div>
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};