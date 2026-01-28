import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Voice Agent Setup",
    description: "Deploy intelligent voice agents that handle inbound and outbound calls with human-like conversations.",
    features: [
      "Custom voice training",
      "24/7 availability",
      "Lead qualification",
      "Appointment scheduling",
      "CRM integration"
    ],
    color: "primary",
    popular: false
  },
  {
    title: "Full Business Automation",
    description: "End-to-end automation solution that transforms your entire business workflow with AI.",
    features: [
      "Process mapping & optimization",
      "Multi-channel AI deployment",
      "Custom workflow design",
      "Analytics dashboard",
      "Ongoing optimization",
      "Priority support"
    ],
    color: "accent",
    popular: true
  },
  {
    title: "AI Chatbot Integration",
    description: "Smart chatbots that engage, qualify, and convert visitors into customers automatically.",
    features: [
      "Custom training on your data",
      "Multi-platform deployment",
      "Lead capture forms",
      "Human handoff capability",
      "Performance analytics"
    ],
    color: "primary",
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            AI Solutions <span className="gradient-text">Built for Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect AI automation package to scale your business 
            and stay ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                service.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    service.color === "primary" ? "text-primary" : "text-accent"
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        service.color === "primary" 
                          ? "bg-primary/10" 
                          : "bg-accent/10"
                      }`}>
                        <Check className={`h-3 w-3 ${
                          service.color === "primary" 
                            ? "text-primary" 
                            : "text-accent"
                        }`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
