import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative z-0 bg-background min-h-screen flex items-center overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
        <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
        
        {/* Main glow */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-glow-color/60 dark:bg-primary/60 opacity-80 blur-3xl" />

        {/* Lamp effect */}
        <motion.div
          initial={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "16rem" }}
          className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-glow-color/60 dark:bg-primary/60 blur-2xl"
        />

        {/* Top line */}
        <motion.div
          initial={{ width: "15rem" }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ width: "30rem" }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-glow-color/60 dark:bg-primary/60"
        />

        {/* Left gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-glow-color/60 dark:from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-glow-color/60 dark:to-primary/60 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto px-6 py-20 relative z-50"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                AI for
                <br />
                <span className="text-tech-blue">HVAC</span>
                <br />
                Diagnostics
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                Never miss any sales opportunities for field technicians.
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
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 h-auto" asChild>
                <a href="https://cal.com/winstonchi/30min" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 h-auto"
              >
                Download App
              </Button>
            </div>

            {/* Integration Badge */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Integrates with:</p>
              <div className="flex gap-4">
                <Badge variant="secondary" className="text-xs bg-button-secondary-bg text-foreground">ServiceTitan</Badge>
                <Badge variant="secondary" className="text-xs bg-button-secondary-bg text-foreground">HouseCall Pro</Badge>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Visual */}
          <div className="hidden lg:flex justify-center items-start">
            <div className="relative -mt-32">
              <div className="absolute inset-0 bg-glow-color/30 rounded-full blur-3xl scale-110"></div>
              <img 
                src="/lovable-uploads/4810cb6a-432e-4dc2-a354-98ce43453416.png" 
                alt="Modern HVAC Equipment - AI-Powered Diagnostics" 
                className="w-full max-w-2xl h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};