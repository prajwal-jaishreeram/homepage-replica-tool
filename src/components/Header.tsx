import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">NOSO LABS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-muted-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Sign In Button */}
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};