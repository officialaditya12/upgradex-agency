import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import CTASection from "@/components/CTASection";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    description: "Perfect for small businesses getting started online.",
    features: ["3 Page Website", "Mobile Responsive", "Basic SEO", "Contact Form", "1 Month Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹5,999",
    description: "Ideal for growing businesses that need more features.",
    features: [
      "5 Pages",
      "Custom Design",
      "SEO + Analytics",
      "Social Media Integration",
      "3 Months Support",
      "Speed Optimization",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹8,499",
    description: "For businesses that want everything and more.",
    features: [
      "Advanced Website",
      "SEO + Ads Setup",
      "Priority Support",
      "E-commerce Ready",
      "6 Months Support",
      "Monthly Reports",
      "Custom Integrations",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Upgradex Agency - Affordable Digital Solutions</title>
        <meta
          name="description"
          content="Affordable pricing plans for website development, SEO, and digital marketing services. Choose from Starter, Pro, or Premium packages."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, <span className="text-gradient">Transparent</span> Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the perfect plan for your business. Custom pricing available for unique requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-3xl ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground scale-105 shadow-glow"
                      : "bg-card border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" /> Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {" "}
                      /project
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "heroOutline" : "hero"}
                    className={`w-full ${
                      plan.popular ? "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10" : ""
                    }`}
                    asChild
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-12"
            >
              📌 Custom pricing available for unique requirements.{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for a personalized quote.
            </motion.p>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Pricing;
