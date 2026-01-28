import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import autupMascot from "@/assets/autup-mascot.png";

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Mascot */}
              <div className="flex-shrink-0">
                <img 
                  src={autupMascot} 
                  alt="Autup AI" 
                  className="w-32 md:w-40 animate-float"
                />
              </div>
              
              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 mb-4">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Limited Time Offer</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Ready to <span className="gradient-text">Automate Your Future?</span>
                </h2>
                
                <p className="text-muted-foreground mb-6 max-w-lg">
                  Book a free strategy call to discover how AI automation can 
                  transform your business operations and accelerate growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 glow-accent"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
