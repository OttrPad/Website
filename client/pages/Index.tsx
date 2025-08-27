import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Users,
  Zap,
  GitBranch,
  PlayCircle,
  Star,
  CheckCircle,
  Github,
  Chrome,
  ArrowRight,
  Sparkles,
  Brain,
  TestTube,
  Shield,
  Rocket,
  Heart,
  Globe,
  Bell,
  Gift
} from "lucide-react";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Index() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: Users,
      title: "Real-time Collaborative Editing",
      description: "See cursors, selections, and changes from your team instantly. No lag, no conflicts, just seamless collaboration."
    },
    {
      icon: Brain,
      title: "Integrated AI Code Assistant",
      description: "Get intelligent suggestions, explanations, and code completions powered by advanced AI right in your editor."
    },
    {
      icon: GitBranch,
      title: "Version Control & Milestones",
      description: "Track changes with milestone tagging and comprehensive history. Never lose your progress again."
    },
    {
      icon: TestTube,
      title: "Instant Execution & Testing",
      description: "Run code snippets instantly with live feedback. Test ideas without setup or configuration."
    }
  ];

  const comparisons = [
    {
      feature: "Setup Time",
      ottrpad: "Zero setup",
      others: "Complex configuration"
    },
    {
      feature: "Collaboration",
      ottrpad: "Real-time with AI",
      others: "Basic sharing"
    },
    {
      feature: "Brainstorming",
      ottrpad: "Notebook-style",
      others: "File-based"
    },
    {
      feature: "AI Integration",
      ottrpad: "Built-in assistant",
      others: "Third-party plugins"
    }
  ];

  const earlyAccessFeatures = [
    {
      icon: Rocket,
      title: "Early Access",
      description: "Be among the first to experience OttrPad's revolutionary collaborative coding environment."
    },
    {
      icon: Gift,
      title: "Lifetime Benefits",
      description: "Early adopters get exclusive pricing, premium features, and priority support for life."
    },
    {
      icon: Bell,
      title: "Development Updates",
      description: "Get behind-the-scenes access to our development process and influence new features."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Join a community of passionate developers shaping the future of collaborative coding."
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your code"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Advanced permission controls and team organization features"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Lightning-fast performance with servers worldwide"
    },
    {
      icon: Code,
      title: "Version Control",
      description: "Built-in Git integration with automated backups and history"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-foreground overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-dark-bg subtle-grid overflow-hidden pt-16"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-bg/80"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-ottr-orange/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-ottr-orange/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 animate-slide-up">
            {/* Logo placeholder */}
            <div className="w-16 h-16 bg-ottr-orange rounded-lg flex items-center justify-center mx-auto mb-8 glow-orange">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient-orange">Collaborate.</span>{" "}
              <span className="text-gradient-orange">Code.</span>{" "}
              <span className="text-gradient-orange">Create</span>{" "}
              <span className="text-white">in Real-Time.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A web-based notebook-style code editor for teams to brainstorm, prototype, and build together – instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-ottr-orange hover:bg-ottr-orange/90 text-white font-semibold px-8 py-6 text-lg glow-orange-strong hover:glow-orange transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2" />
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="auth-button text-foreground font-semibold px-8 py-6 text-lg"
              >
                <PlayCircle className="mr-2" />
                View Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/20 pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-dark-bg to-darker-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Modern Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to collaborate, create, and innovate in one seamless platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="glass-card hover:glass-card-subtle transition-all duration-300 fade-in-on-scroll group transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-ottr-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-ottr-orange" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-b from-darker-bg to-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why OttrPad?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we compare to existing tools like Replit, CodeSandbox, and VS Code Live Share.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto fade-in-on-scroll">
            <Card className="glass-card">
              <CardHeader>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="text-muted-foreground font-semibold">Feature</div>
                  <div className="text-ottr-orange font-bold text-lg">OttrPad</div>
                  <div className="text-muted-foreground font-semibold">Others</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b border-border/20 last:border-b-0">
                    <div className="font-medium text-foreground">{item.feature}</div>
                    <div className="text-ottr-orange font-semibold flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {item.ottrpad}
                    </div>
                    <div className="text-muted-foreground">{item.others}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo/Preview Section */}
      <section id="demo" className="py-24 bg-gradient-to-b from-dark-bg to-darker-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See OttrPad in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the notebook-style layout with live code execution and real-time collaboration.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto fade-in-on-scroll">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-darker-bg to-dark-bg flex items-center justify-center relative overflow-hidden">
                  {/* Mock Editor Interface */}
                  <div className="w-full h-full p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Code Panel */}
                    <div className="glass-card-subtle rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex space-x-2 mr-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">data_analysis.ipynb</span>
                      </div>
                      <div className="space-y-3 text-sm font-mono">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-400 text-xs">In [1]:</span>
                        </div>
                        <div className="text-ottr-orange"># Testing quadratic formula with numpy</div>
                        <div className="text-foreground">
                          <span className="text-purple-400">import</span> <span className="text-blue-400">numpy</span> <span className="text-purple-400">as</span> <span className="text-blue-400">np</span>
                        </div>
                        <div className="text-foreground">
                          <span className="text-purple-400">import</span> <span className="text-blue-400">matplotlib.pyplot</span> <span className="text-purple-400">as</span> <span className="text-blue-400">plt</span>
                        </div>
                        <div className="text-foreground mt-2">
                          <span className="text-ottr-orange">a</span>, <span className="text-ottr-orange">b</span>, <span className="text-ottr-orange">c</span> = <span className="text-cyan-400">2</span>, <span className="text-cyan-400">-7</span>, <span className="text-cyan-400">3</span>
                        </div>
                        <div className="text-foreground">
                          <span className="text-ottr-orange">discriminant</span> = <span className="text-ottr-orange">b</span>**<span className="text-cyan-400">2</span> - <span className="text-cyan-400">4</span>*<span className="text-ottr-orange">a</span>*<span className="text-ottr-orange">c</span>
                        </div>
                        <div className="text-foreground">
                          <span className="text-ottr-orange">roots</span> = <span className="text-blue-400">np</span>.<span className="text-ottr-orange">roots</span>([<span className="text-ottr-orange">a</span>, <span className="text-ottr-orange">b</span>, <span className="text-ottr-orange">c</span>])
                        </div>
                        <div className="text-foreground">
                          <span className="text-purple-400">print</span>(<span className="text-green-400">f'Roots: &#123;roots&#125;'</span>)
                        </div>
                        <div className="text-ottr-orange mt-3"># AI Suggestion: Verify with manual calculation</div>
                      </div>
                    </div>
                    
                    {/* Output Panel */}
                    <div className="glass-card-subtle rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <PlayCircle className="w-4 h-4 text-ottr-orange mr-2" />
                        <span className="text-sm text-muted-foreground">Live Output</span>
                      </div>
                      <div className="space-y-3 text-sm font-mono">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-red-400 text-xs">Out [1]:</span>
                        </div>
                        <div className="text-green-400">Roots: [3.0 0.5]</div>
                        <div className="text-foreground mt-2">
                          <div className="text-blue-400">Verification:</div>
                          <div className="text-foreground">For x = 3.0: 2(3)² - 7(3) + 3 = 0 ✓</div>
                          <div className="text-foreground">For x = 0.5: 2(0.5)² - 7(0.5) + 3 = 0 ✓</div>
                          <div className="text-muted-foreground">Discriminant: 25.0</div>
                        </div>
                        <div className="text-muted-foreground mt-4">✓ Executed in 0.15s</div>
                        <div className="text-muted-foreground">👥 3 collaborators online</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Cursors */}
                  <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-ottr-orange rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Early Access Section */}
      <section id="community" className="py-24 bg-gradient-to-b from-darker-bg to-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Future of Coding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of our early community and help shape the future of collaborative development.
            </p>
          </div>

          {/* Early Access Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {earlyAccessFeatures.map((feature, index) => (
              <Card
                key={index}
                className="glass-card hover:glass-card-subtle transition-all duration-300 fade-in-on-scroll text-center group transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-ottr-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-ottr-orange" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Security & Infrastructure */}
          <div className="text-center mb-8 fade-in-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Built for Production
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security and infrastructure from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="glass-card hover:glass-card-subtle transition-all duration-300 fade-in-on-scroll text-center group transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-dark-bg subtle-grid relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 fade-in-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to build together?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers, educators, and teams who are already collaborating in real-time with OttrPad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="auth-button text-foreground font-semibold px-10 py-6 text-lg hover:border-ottr-orange/50"
              >
                <Github className="mr-2" />
                Continue with GitHub
              </Button>
              <Button 
                size="lg"
                className="auth-button text-foreground font-semibold px-10 py-6 text-lg hover:border-ottr-orange/50"
              >
                <Chrome className="mr-2" />
                Continue with Google
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Start collaborating in under 30 seconds. No setup required.
              </p>
              <div className="flex items-center justify-center text-sm text-ottr-orange">
                <Globe className="w-4 h-4 mr-2" />
                Free for small teams
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
