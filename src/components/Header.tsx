import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/8437d24e-c6d4-40ce-9e2b-9b39b225e490.png" 
              alt="NOSO LABS Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-foreground">NOSO LABS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="text-foreground hover:text-muted-foreground transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={item.href}
                    to={item.href} 
                    className="text-foreground hover:text-muted-foreground transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background" asChild>
              <a href="https://cal.com/winstonchi/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-foreground hover:text-muted-foreground transition-colors font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-foreground hover:text-muted-foreground transition-colors font-medium text-lg py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background" asChild>
                    <a href="https://cal.com/winstonchi/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
                  </Button>
                  <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                    Download App
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};