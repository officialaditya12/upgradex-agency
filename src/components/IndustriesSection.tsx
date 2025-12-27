import { motion } from "framer-motion";
import { Rocket, Building2, ShoppingCart, Mic, Store } from "lucide-react";

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: Building2, name: "Small Businesses" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Mic, name: "Coaches & Creators" },
  { icon: Store, name: "Local Businesses" },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for diverse business sectors.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-6 py-4 rounded-full bg-glass hover:shadow-glow transition-all duration-300 cursor-default"
            >
              <industry.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
