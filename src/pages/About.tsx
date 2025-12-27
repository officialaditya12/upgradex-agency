import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Rocket } from "lucide-react";
import Layout from "@/components/layout";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Upgradex Agency - Digital Growth Experts</title>
        <meta
          name="description"
          content="Learn about Upgradex Agency - a digital growth agency focused on helping businesses build a strong online presence through technology, marketing & innovation."
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
                About <span className="text-gradient">Upgradex Agency</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in digital transformation and business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who <span className="text-gradient">We Are</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Upgradex Agency is a digital growth agency focused on helping
                  businesses build a strong online presence through technology,
                  marketing & innovation.
                </p>
                <p className="text-muted-foreground">
                  We specialize in creating comprehensive digital solutions that
                  drive real results. From stunning websites to effective SEO
                  strategies and high-converting ad campaigns, we have the
                  expertise to take your business to the next level.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Users, value: "50+", label: "Happy Clients" },
                  { icon: Rocket, value: "100+", label: "Projects" },
                  { icon: Award, value: "5+", label: "Years" },
                  { icon: Target, value: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-glass text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-glass"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver affordable, effective & scalable digital solutions
                  that help businesses grow faster. We believe every business
                  deserves access to premium digital services regardless of size
                  or budget.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-glass"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a trusted global digital agency empowering startups
                  and entrepreneurs worldwide. We envision a future where every
                  business can thrive in the digital landscape.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default About;
