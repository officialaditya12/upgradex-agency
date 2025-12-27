import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Upgradex Agency - Get a Free Consultation</title>
        <meta
          name="description"
          content="Get in touch with Upgradex Agency. Book a free consultation for your digital marketing, web development, or SEO needs. WhatsApp support available."
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
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Book a free consultation and let's discuss how we can help your
                business grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-6 mb-12">
                  <a
                    href="tel:+919153276992"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:shadow-glow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 9153276992</p>
                    </div>
                  </a>

                  <a
                    href="mailto:upgradex@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:shadow-glow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">upgradex@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919153276992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-glass hover:shadow-glow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="text-foreground font-medium">Chat with us</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-glass">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">India</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-muted-foreground text-sm">
                    💬 <span className="font-medium text-foreground">WhatsApp Support Available</span>
                    <br />
                    Get instant responses on WhatsApp. We're here to help 24/7!
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-8 rounded-3xl bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-secondary border-border resize-none"
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
