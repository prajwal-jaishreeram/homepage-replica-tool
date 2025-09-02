import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-hero-bg to-hero-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-tech-blue/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[75vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            {/* Y Combinator Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <Badge variant="outline" className="border-yc-orange text-yc-orange bg-background/50 backdrop-blur-sm hover:bg-yc-orange/10 transition-colors">
                <div className="w-4 h-4 bg-yc-orange rounded-sm flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">Y</span>
                </div>
                Backed by Y Combinator S25
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                10x Faster
                <br />
                <span className="text-tech-blue relative">
                  HVAC
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-tech-blue/60 to-transparent lg:block hidden"></div>
                </span>
                <br />
                Diagnostics
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                AI-powered diagnostics from 15M+ HVAC manuals. 
                Increase revenue, reduce callbacks, and turn every technician into an expert.
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-background/30 backdrop-blur-sm rounded-full px-3 py-2">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">5-10% Revenue Increase</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/30 backdrop-blur-sm rounded-full px-3 py-2">
                <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">15M+ HVAC Manuals</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/30 backdrop-blur-sm rounded-full px-3 py-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">5-Min Setup</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download App
              </Button>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 h-auto bg-background/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                Book a Call
              </Button>
            </div>

            {/* Integration Badge */}
            <div className="pt-4 text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">Integrates with:</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Badge variant="secondary" className="text-xs bg-background/50 backdrop-blur-sm">ServiceTitan</Badge>
                <Badge variant="secondary" className="text-xs bg-background/50 backdrop-blur-sm">HouseCall Pro</Badge>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Visual */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Decorative background circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-success-green/10 rounded-full blur-xl"></div>
              
              <div className="relative bg-background/20 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-2xl border border-border/20">
                <img 
                  src="/lovable-uploads/4810cb6a-432e-4dc2-a354-98ce43453416.png" 
                  alt="Modern HVAC Equipment - AI-Powered Diagnostics showcasing professional diagnostic tools and equipment" 
                  className="w-full h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-2 left-4 bg-success-green text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                  AI Powered
                </div>
                <div className="absolute -bottom-2 right-4 bg-tech-blue text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                  15M+ Manuals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};