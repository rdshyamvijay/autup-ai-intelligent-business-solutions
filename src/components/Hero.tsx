import { ArrowRight, Sparkles, Zap, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import autupMascot from "@/assets/autup-mascot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Powered by Next-Gen AI Technology
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="gradient-text">AI Automation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Leverage cutting-edge AI voice agents and intelligent automation to 
              streamline operations, boost productivity, and scale your business effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-primary"
              >
                Start Automating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Automations Built</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">10K+</p>
                <p className="text-sm text-muted-foreground">Hours Saved</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow Effect Behind Mascot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse-slow" />
            </div>
            
            {/* Mascot Image */}
            <div className="relative">
              <img 
                src={autupMascot} 
                alt="Autup AI Assistant" 
                className="w-72 md:w-96 lg:w-[450px] object-contain animate-float drop-shadow-2xl"
              />
              
              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 glass-card rounded-xl p-3 animate-float-delayed shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Voice AI</span>
                </div>
              </div>
              
              <div className="absolute -right-4 top-1/2 glass-card rounded-xl p-3 animate-float shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
