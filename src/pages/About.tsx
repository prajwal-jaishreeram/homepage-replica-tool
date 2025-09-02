import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Download, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">NOSO LABS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The world's first LLM-powered HVAC diagnostics company
          </p>
        </div>

        <Card className="mb-12 border-foreground">
          <CardContent className="p-8 lg:p-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Noso Labs is the world's first LLM-powered HVAC diagnostics company, bringing artificial intelligence to the heating and cooling industry.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We leverage advanced large language models to troubleshoot HVAC issues in seconds, not hours, enabling technicians to resolve problems with unprecedented speed. Our AI assistant provides instant, step-by-step guidance grounded in real manufacturer data, making your technicians up to 10× more efficient while reducing callbacks and repeat visits.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                By streamlining everything from initial diagnostics to report documentation and quote generation, NOSO helps HVAC teams save time, cut down paperwork, and improve customer satisfaction on every job.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Backed by Y Combinator (S25), NOSO LABS combines Silicon Valley innovation with real-world HVAC expertise. Our mission is to make HVAC service smarter, faster, and more reliable using cutting-edge AI.
              </p>

              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-yc-orange rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Y</span>
                  </div>
                  <span className="text-lg font-medium text-foreground">Backed by Y Combinator</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Ready to Get Started?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 h-auto bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://cal.com/winstonchi/30min" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book a Call</span>
              </a>
            </Button>
            
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6 h-auto" asChild>
              <a href="https://linkedin.com/company/noso-labs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <span>Follow on LinkedIn</span>
              </a>
            </Button>
          </div>

          <div className="bg-muted/50 border border-foreground rounded-lg p-6">
            <p className="text-sm text-muted-foreground">
              Have questions? Contact us at{" "}
              <a href="mailto:contact@noso.so" className="text-primary hover:underline">
                contact@noso.so
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;