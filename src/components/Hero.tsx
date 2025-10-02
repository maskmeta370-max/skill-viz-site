import { ArrowRight, Github, Linkedin, Mail, Database, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import DataVisualization from "./DataVisualization";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <DataVisualization />
      
      <div className="absolute inset-0 gradient-radial"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8 animate-fade-in">
            <div className="glass-card p-4 rounded-xl animate-float" style={{ animationDelay: "0s" }}>
              <Database className="h-8 w-8 text-primary mx-auto" />
            </div>
            <div className="glass-card p-4 rounded-xl animate-float" style={{ animationDelay: "0.5s" }}>
              <Brain className="h-8 w-8 text-secondary mx-auto" />
            </div>
            <div className="glass-card p-4 rounded-xl animate-float" style={{ animationDelay: "1s" }}>
              <TrendingUp className="h-8 w-8 text-accent mx-auto" />
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            Data Science
            <span className="block text-gradient mt-2">Portfolio</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transforming complex datasets into actionable insights through 
            <span className="text-primary font-semibold"> advanced analytics</span>, 
            <span className="text-secondary font-semibold"> machine learning</span>, and 
            <span className="text-accent font-semibold"> innovative visualization</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="group glow-effect hover:scale-105 transition-all" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover:scale-105 transition-all" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
