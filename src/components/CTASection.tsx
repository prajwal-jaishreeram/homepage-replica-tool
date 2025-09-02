import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
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

export const CTASection = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <FeatureCard className="p-6">
          <CardContent className="p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
              Ready to 10x Your 
              <br />
              <span className="text-primary">HVAC Diagnostics?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-center">
              Join hundreds of HVAC professionals already using AI to increase revenue, 
              reduce callbacks, and deliver better service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="text-lg px-8 py-6 h-auto">
                Download App Now
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 h-auto"
              >
                Schedule Demo Call
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No setup costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Immediate ROI</span>
              </div>
            </div>
          </CardContent>
        </FeatureCard>
      </div>
    </section>
  );
};