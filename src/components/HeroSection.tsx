import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-hero-accent min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-tech-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-success-green/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Y Combinator Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <Badge variant="outline" className="border-yc-orange text-yc-orange bg-yc-orange/5 hover-scale">
                <div className="w-4 h-4 bg-yc-orange rounded-sm flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">Y</span>
                </div>
                Backed by Y Combinator S25
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                <span className="block">10x Faster</span>
                <span className="block text-tech-blue bg-gradient-to-r from-tech-blue to-accent bg-clip-text text-transparent">
                  HVAC
                </span>
                <span className="block">Diagnostics</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl lg:max-w-xl leading-relaxed mx-auto lg:mx-0">
                AI-powered diagnostics from 15M+ HVAC manuals. 
                Increase revenue, reduce callbacks, and turn every technician into an expert.
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 hover-scale">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">5-10% Revenue Increase</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 hover-scale">
                <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">15M+ HVAC Manuals</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 hover-scale">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">5-Min Setup</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 h-auto hover-scale shadow-lg hover:shadow-xl transition-all duration-300">
                Download App
              </Button>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 h-auto hover-scale shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Call
              </Button>
            </div>

            {/* Integration Badge */}
            <div className="pt-4 text-center lg:text-left">
              <p className="text-sm text-muted-foreground mb-2">Integrates with:</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Badge variant="secondary" className="text-xs hover-scale">ServiceTitan</Badge>
                <Badge variant="secondary" className="text-xs hover-scale">HouseCall Pro</Badge>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Visual */}
          <div className="flex justify-center items-center order-first lg:order-last animate-scale-in">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-tech-blue/20 via-accent/20 to-success-green/20 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/4810cb6a-432e-4dc2-a354-98ce43453416.png" 
                  alt="Modern HVAC Equipment - AI-Powered Diagnostics" 
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain hover-scale transition-transform duration-500"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-blue rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success-green rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};