import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darker-bg border-t border-white/10 relative overflow-hidden">
      {/* Large Background Text Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[100vw] md:text-[30vw] font-black text-white/[0.04] select-none leading-none tracking-tighter">
          OttrPad
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-ottr-orange rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">OttrPad</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The future of collaborative coding. Build, learn, and innovate
              together in real-time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-ottr-orange transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-ottr-orange transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-ottr-orange transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-ottr-orange transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Product</h3>
            <div className="space-y-2">
              <a
                href="#features"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Features
              </a>
              <a
                href="#demo"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Demo
              </a>
              <a
                href="#pricing"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Roadmap
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Changelog
              </a>
            </div>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Developers</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                API Reference
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="#community"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Community
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Support
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Company</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-ottr-orange transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 OttrPad. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Made with ❤️ for developers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
