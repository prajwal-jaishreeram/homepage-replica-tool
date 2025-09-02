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
    <section className="bg-special-section-bg py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-5xl">
        <FeatureCard className="p-3 sm:p-6">
          <CardContent className="p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-center leading-tight">
              Ready to 10x Your 
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              <span className="text-primary">HVAC Diagnostics?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-center px-2">
              Join hundreds of HVAC professionals already using AI to increase revenue, 
              reduce callbacks, and deliver better service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2">
              <Button 
                variant="outline" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 border-foreground"
                asChild
              >
                <a href="https://cal.com/winstonchi/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Demo Call
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>No setup costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Immediate ROI</span>
              </div>
            </div>
          </CardContent>
        </FeatureCard>
      </div>
    </section>
  );
};