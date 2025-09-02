import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Car, Smartphone, CheckCircle, LucideIcon, Search, Stethoscope, CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  children: ReactNode;
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
  number: string;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, number, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      Step {number}
    </span>
    <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
    <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
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
    <section id="how-it-works" className="bg-muted/50 py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
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
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </CardHeader>
            </FeatureCard>
          ))}
        </div>

        {/* Workflow visualization */}
        <FeatureCard className="p-6 lg:col-span-1 mt-8">
          <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
            Seamless AI integration that enhances your existing workflow
          </p>

          <div className="flex justify-center gap-6 overflow-hidden">
            <WorkflowStep label="Analyze" icon={Search} />
            <WorkflowStep label="Diagnose" icon={Stethoscope} />
            <WorkflowStep label="Complete" icon={CircleCheckBig} />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
};

interface WorkflowStepProps {
  label: string;
  icon: LucideIcon;
}

const WorkflowStep = ({ label, icon: Icon }: WorkflowStepProps) => (
  <div>
    <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center justify-center rounded-[15px] p-4">
        <Icon className="size-6 text-primary sm:size-7" />
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">{label}</span>
  </div>
);