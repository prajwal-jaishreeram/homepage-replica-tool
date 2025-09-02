import { Button } from "@/components/ui/button";
import hvacIllustration from "@/assets/hvac-illustration.png";

export const HeroSection = () => {
  return (
    <section className="bg-hero-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                AI for HVAC
                <br />
                diagnostics
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Never miss any sales opportunities
                <br />
                for field technicians
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3 text-lg">
                Book a demo
              </Button>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-3 text-lg"
              >
                Download App
              </Button>
            </div>

            {/* Y Combinator Badge */}
            <div className="flex items-center space-x-3 pt-8">
              <span className="text-foreground text-lg">Backed by</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yc-orange rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Y</span>
                </div>
                <span className="text-xl font-semibold text-foreground">Combinator</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <img 
              src={hvacIllustration} 
              alt="HVAC diagnostics illustration" 
              className="w-full max-w-lg opacity-80"
            />
          </div>
        </div>

        {/* Efficiency Section */}
        <div className="mt-20 pt-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            10X more efficient
            <br />
            diagnostics
          </h2>
        </div>
      </div>
    </section>
  );
};