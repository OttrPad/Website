import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-ottr-orange rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">OttrPad</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-ottr-orange transition-colors">
              Features
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-ottr-orange transition-colors">
              Demo
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-ottr-orange transition-colors">
              Pricing
            </a>
            <a href="#community" className="text-muted-foreground hover:text-ottr-orange transition-colors">
              Community
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-ottr-orange hover:bg-ottr-orange/90 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-ottr-orange transition-colors">
                Features
              </a>
              <a href="#demo" className="text-muted-foreground hover:text-ottr-orange transition-colors">
                Demo
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-ottr-orange transition-colors">
                Pricing
              </a>
              <a href="#community" className="text-muted-foreground hover:text-ottr-orange transition-colors">
                Community
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                <Button
                  className="bg-ottr-orange hover:bg-ottr-orange/90 text-white justify-start"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
