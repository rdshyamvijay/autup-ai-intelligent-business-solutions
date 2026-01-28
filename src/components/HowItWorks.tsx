import { MessageSquare, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We analyze your current workflows and identify automation opportunities tailored to your business needs.",
    color: "primary"
  },
  {
    step: "02",
    icon: Settings,
    title: "AI Configuration",
    description: "Our team designs and trains custom AI solutions using the latest models and your specific business data.",
    color: "accent"
  },
  {
    step: "03",
    icon: Rocket,
    title: "Deployment",
    description: "We seamlessly integrate AI automation into your existing systems with thorough testing and optimization.",
    color: "primary"
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Scale & Optimize",
    description: "Continuous monitoring and improvement ensure your AI systems evolve with your growing business.",
    color: "accent"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Transform Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined approach ensures rapid deployment of AI solutions 
            without disrupting your current operations.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative z-10 text-center group">
                  {/* Step Number */}
                  <div className="inline-block mb-4">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      item.color === "primary" 
                        ? "bg-primary/10 group-hover:bg-primary/20" 
                        : "bg-accent/10 group-hover:bg-accent/20"
                    }`}>
                      <item.icon className={`h-10 w-10 ${
                        item.color === "primary" ? "text-primary" : "text-accent"
                      }`} />
                    </div>
                  </div>
                  
                  {/* Step Label */}
                  <span className={`text-sm font-bold ${
                    item.color === "primary" ? "text-primary" : "text-accent"
                  }`}>
                    STEP {item.step}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mt-2 mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
