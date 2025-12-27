import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  Palette,
  Package,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive & SEO-friendly websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google & get organic traffic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    description: "High-ROI ad campaigns that generate instant leads.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Android & iOS apps for startups and businesses.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    description: "Professional brand identity that builds trust.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Package,
    title: "Premium Tools",
    description: "Affordable access to Canva, ChatGPT, Coursera & more.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80",
    platforms: [
      {
        name: "Canva Pro",
        logo: "https://cdn.simpleicons.org/canva/00C4CC",
        color: "#00C4CC",
      },
      {
        name: "ChatGPT Plus",
        logo: "https://cdn.simpleicons.org/openai/412991",
        color: "#412991",
      },
      {
        name: "Coursera",
        logo: "https://cdn.simpleicons.org/coursera/0056D2",
        color: "#0056D2",
      },
      {
        name: "EdX",
        logo: "https://cdn.simpleicons.org/edx/02262B",
        color: "#02262B",
      },
      {
        name: "Spotify",
        logo: "https://cdn.simpleicons.org/spotify/1DB954",
        color: "#1DB954",
      },
      {
        name: "YouTube Premium",
        logo: "https://cdn.simpleicons.org/youtube/FF0000",
        color: "#FF0000",
      },
      {
        name: "Adobe Creative Cloud",
        logo: "https://cdn.simpleicons.org/adobe/FF0000",
        color: "#FF0000",
      },
      {
        name: "Lovable",
        logo: "https://cdn.simpleicons.org/vercel/000000",
        color: "#000000",
      },
      {
        name: "QuillBot",
        logo: "https://cdn.simpleicons.org/quillbot/4B8BBE",
        color: "#4B8BBE",
      },
      {
        name: "Hostinger",
        logo: "https://cdn.simpleicons.org/hostinger/6730EC",
        color: "#6730EC",
      },
    ],
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to take your business to the next
            level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                {service.title === "Premium Tools" && service.platforms ? (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-3">
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg z-10">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 h-full items-center justify-center mt-8">
                      {service.platforms.slice(0, 9).map((platform, platformIndex) => (
                        <div
                          key={platformIndex}
                          className="w-10 h-10 rounded-md bg-card border-2 border-border/50 flex items-center justify-center p-1.5 hover:border-primary/70 hover:shadow-glow transition-all duration-300"
                          style={{ borderColor: platform.color + '40' }}
                        >
                          <img
                            src={platform.logo}
                            alt={platform.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={service.image}
                      alt={`${service.title} - Upgradex Agency`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
