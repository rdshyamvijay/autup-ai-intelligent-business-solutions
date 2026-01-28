import { 
  Bot, 
  MessageSquare, 
  Workflow, 
  Brain, 
  Mic2, 
  Calendar,
  Mail,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Voice Agents",
    description: "24/7 intelligent voice assistants that handle calls, qualify leads, and book appointments automatically.",
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Smart conversational AI that engages visitors, answers questions, and converts leads around the clock.",
    color: "accent"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks with intelligent automation that adapts to your business processes.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Conversation AI",
    description: "Advanced NLP-powered conversations that understand context and deliver personalized responses.",
    color: "accent"
  },
  {
    icon: Mic2,
    title: "Voice Cloning",
    description: "Create consistent brand voice across all AI interactions with custom voice synthesis technology.",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered appointment booking that syncs calendars and eliminates scheduling conflicts.",
    color: "accent"
  },
  {
    icon: Mail,
    title: "Email AI",
    description: "Intelligent email automation that crafts personalized messages and manages follow-ups.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Deep insights into customer interactions with AI-driven reporting and optimization suggestions.",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            AI-Powered Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cutting-Edge <span className="gradient-text">AI Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Harness the power of the latest AI technologies to automate, optimize, 
            and transform every aspect of your business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                feature.color === "primary" 
                  ? "bg-primary/10" 
                  : "bg-accent/10"
              }`}>
                <feature.icon className={`h-6 w-6 ${
                  feature.color === "primary" 
                    ? "text-primary" 
                    : "text-accent"
                }`} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
