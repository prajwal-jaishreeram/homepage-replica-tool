import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8437d24e-c6d4-40ce-9e2b-9b39b225e490.png" 
              alt="NOSO LABS Logo" 
              className="w-8 h-8"
            />
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

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex border-foreground text-foreground hover:bg-foreground hover:text-background" asChild>
              <a href="https://cal.com/winstonchi/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
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