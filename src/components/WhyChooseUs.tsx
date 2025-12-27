import { motion } from "framer-motion";
import { Target, DollarSign, Zap, Headphones, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Result-Driven Strategies",
    description: "Data-backed approaches that deliver measurable outcomes.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium services at competitive prices for all budgets.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 assistance from our expert team.",
  },
  {
    icon: Shield,
    title: "Trusted by 50+ Clients",
    description: "Proven track record of success across industries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-gradient">Upgradex Agency?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to help your
            business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-glass hover:shadow-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
