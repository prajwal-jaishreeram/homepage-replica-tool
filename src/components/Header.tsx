import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-foreground">NOSO LABS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
              About
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex border-foreground text-foreground hover:bg-foreground hover:text-background">
              Book a Call
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};