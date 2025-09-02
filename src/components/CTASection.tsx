import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CTASection = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Card className="bg-background border-none shadow-2xl">
          <CardContent className="p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to 10x Your 
              <br />
              <span className="text-tech-blue">HVAC Diagnostics?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of HVAC professionals already using AI to increase revenue, 
              reduce callbacks, and deliver better service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 h-auto">
                Download App Now
              </Button>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 h-auto"
              >
                Schedule Demo Call
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-success-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-success-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No setup costs</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-success-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Immediate ROI</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};