import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hvacEquipment from "@/assets/hvac-equipment.png";

export const HeroSection = () => {
  return (
    <section className="bg-section-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Y Combinator Badge */}
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="border-yc-orange text-yc-orange">
                <div className="w-4 h-4 bg-yc-orange rounded-sm flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">Y</span>
                </div>
                Backed by Y Combinator S25
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                10x Faster
                <br />
                <span className="text-tech-blue">HVAC</span>
                <br />
                Diagnostics
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                AI-powered diagnostics from 15M+ HVAC manuals. 
                Increase revenue, reduce callbacks, and turn every technician into an expert.
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-green rounded-full"></div>
                <span className="text-foreground font-medium">5-10% Revenue Increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                <span className="text-foreground font-medium">15M+ HVAC Manuals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">5-Min Setup</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto">
                Download App
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 h-auto"
              >
                Book a Call
              </Button>
            </div>

            {/* Integration Badge */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Integrates with:</p>
              <div className="flex gap-4">
                <Badge variant="secondary" className="text-xs">ServiceTitan</Badge>
                <Badge variant="secondary" className="text-xs">HouseCall Pro</Badge>
              </div>
            </div>
          </div>

          {/* Right Side - HVAC Equipment Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              <img 
                src={hvacEquipment} 
                alt="Professional HVAC equipment and diagnostics tools" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};