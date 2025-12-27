import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Megaphone,
  Palette,
  Package,
  CheckCircle,
  Handshake,
  Code,
  Smartphone,
  Layout as LayoutIcon,
  Server,
  Figma,
  FileCode,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import Layout from "@/components/layout";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive & SEO-friendly websites that convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80",
    features: [
      "Static & Dynamic Websites",
      "Business & Portfolio Sites",
      "Landing Pages",
      "E-commerce Websites",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Rank higher on Google and drive organic traffic to your website.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    features: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword Research",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description:
      "High-ROI ad campaigns that generate instant leads and conversions.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&q=80",
    features: [
      "Google Ads",
      "Facebook & Instagram Ads",
      "Lead Generation Campaigns",
      "Conversion Tracking",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Professional brand identity that builds trust and recognition.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80",
    features: ["Logo Design", "Social Media Creatives", "UI/UX Design"],
  },
  {
    icon: Package,
    title: "Premium Tools & Subscriptions",
    description:
      "Affordable access to industry-leading tools and platforms.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&q=80",
    features: [
      "Canva Pro",
      "ChatGPT Plus",
      "Coursera / EdX",
      "Spotify / YouTube Premium",
      "Adobe Creative Cloud",
      "Lovable",
      "QuillBot",
      "Hostinger",
    ],
    platforms: [
      {
        name: "Canva Pro",
        logo: "https://imgs.search.brave.com/wFS4pWG_hSajlvFUNFzW7qf4sl7ZKtc9AkAKDcRBN20/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjczMzYz/N2xvZ28tY2FudmEt/cG5nLnBuZw",
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
        logo: "https://imgs.search.brave.com/w4PjcuXikRc-Drm5inAfb2fql7HaVkXHhkoQwlyHMvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ4LzIvZWR4LWZy/ZWUtb25saW5lLWNv/dXJzZS1sb2dvLXBu/Z19zZWVrbG9nby00/ODQwMzAucG5n",
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
        logo: "https://imgs.search.brave.com/N6NL2nFP4vdDxXr0XceSlEGRalE8ou-2OSjhzQo2v9A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/MTAwLzk3Ny9zbWFs/bC9hZG9iZS1jcmVh/dGl2ZS1jbG91ZC1s/b2dvLWZyZWUtZG93/bmxvYWQtY29sb3Jm/dWxsLWFkb2JlLWNy/ZWF0aXZlLWNsb3Vk/LWxvZ28tZnJlZS1w/bmcucG5n",
        color: "#FF0000",
      },
      {
        name: "Lovable",
        logo: "https://imgs.search.brave.com/nomTNGqclYUSdCUegLIRUGiyRqztuUvvpvLXbdwlRek/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZEg5T2p5aVVx/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc0ODIzOTkyODY3/MA",
        color: "#000000",
      },
      {
        name: "QuillBot",
        logo: "https://imgs.search.brave.com/4oUjv6iEVcVG21EpeArPxT69mhVeJOn0nI6ipdk-InU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEx/L1F1aWxsQm90LUxv/Z28tNTAweDI4MS5w/bmc",
        color: "#4B8BBE",
      },
    ],
  },
];

const developers = [
  { icon: Code, title: "Frontend Developers", tech: "HTML, CSS, React" },
  { icon: Server, title: "Backend Developers", tech: "Node.js, PHP, Python" },
  { icon: FileCode, title: "Full-Stack Developers", tech: "MERN, LAMP Stack" },
  { icon: Smartphone, title: "Mobile App Developers", tech: "Android / iOS" },
  { icon: LayoutIcon, title: "WordPress Developers", tech: "Theme & Plugin Dev" },
  { icon: Figma, title: "UI/UX Designers", tech: "Figma, Adobe XD" },
];

const engagementModels = [
  {
    title: "Project-Based",
    description: "Fixed cost per project. Ideal for short-term & one-time projects.",
    icon: Zap,
  },
  {
    title: "Dedicated Developers",
    description: "Monthly basis. Full-time or part-time developers for ongoing work.",
    icon: Users,
  },
  {
    title: "White-Label Partnership",
    description: "Work under your brand. NDA protected with zero branding conflict.",
    icon: Shield,
  },
];

const partnerBenefits = [
  "No hiring cost",
  "Pre-vetted developers",
  "Fast project delivery",
  "Scalable team size",
  "Dedicated project support",
  "Confidential & secure collaboration",
];

const bestFor = [
  "Digital marketing agencies",
  "Web & app development companies",
  "Startups needing tech support",
  "Businesses with overflow projects",
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Upgradex Agency - Digital Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive digital services including Website Development, SEO, Paid Ads, App Development, Branding & Premium Tools."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive digital solutions tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <CheckCircle className="w-5 h-5 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    {service.title === "Premium Tools & Subscriptions" && service.platforms ? (
                      <div className="relative aspect-square rounded-3xl overflow-hidden bg-glass p-6 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
                        <div className="relative h-full flex flex-col">
                          <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow z-10">
                            <service.icon className="w-7 h-7 text-primary-foreground" />
                          </div>
                          
                          {/* Platform Logos Grid - 3x4 layout for 10 items */}
                          <div className="flex-1 grid grid-cols-3 gap-3 items-center justify-center mt-12">
                            {service.platforms.map((platform, platformIndex) => (
                              <motion.div
                                key={platformIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: platformIndex * 0.05 }}
                                viewport={{ once: true }}
                                className="relative group/item flex flex-col items-center"
                              >
                                <div 
                                  className="w-16 h-16 rounded-lg bg-card border-2 border-border/50 flex items-center justify-center p-2.5 hover:border-primary/70 hover:shadow-glow transition-all duration-300 group-hover/item:scale-110"
                                  style={{ borderColor: platform.color + '40' }}
                                >
                                  <img
                                    src={platform.logo}
                                    alt={platform.name}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none">
                                  <span className="text-[10px] text-muted-foreground whitespace-nowrap bg-card/90 px-1.5 py-0.5 rounded">
                                    {platform.name}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                            {/* Empty space for grid alignment */}
                            <div className="w-16 h-16"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-square rounded-3xl overflow-hidden bg-glass group">
                        <img
                          src={service.image}
                          alt={`${service.title} Service - Upgradex Agency`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent" />
                        <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                      </div>
                    )}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[64px]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Partnership Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Handshake className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Partnership Program</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Agency <span className="text-gradient">Partnership</span> Program
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Upgradex Agency collaborates with startups, IT companies, marketing agencies, and businesses 
                by providing skilled developers on a project-basis or monthly contract. We work as your 
                extended technical team — you get quality delivery without hiring full-time employees.
              </p>
            </motion.div>

            {/* Developers We Provide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-center mb-8">
                👨‍💻 Developers We Provide
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {developers.map((dev, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <dev.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{dev.title}</h4>
                    <p className="text-muted-foreground text-sm">{dev.tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Engagement Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-center mb-8">
                💼 Engagement Models
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {engagementModels.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <model.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-xl mb-3">{model.title}</h4>
                    <p className="text-muted-foreground">{model.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Payment Model */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="bg-glass rounded-3xl p-8 md:p-12 border border-border">
                <h3 className="text-2xl font-bold text-center mb-8">
                  💰 Flexible Payment Model
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Pay per project",
                    "Monthly developer cost",
                    "Flexible pricing based on skills & duration",
                    "No long-term contract required",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-card/50 rounded-xl p-4 border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Partner & Best For */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">🌟</span> Why Partner with Upgradex?
                </h3>
                <ul className="space-y-3">
                  {partnerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-2xl">📌</span> Best For
                </h3>
                <ul className="space-y-3">
                  {bestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Partnership CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need developers for your next project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with Upgradex Agency and scale your team without the hiring hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="/contact">Get Developers</a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/contact">Partner With Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Services;
