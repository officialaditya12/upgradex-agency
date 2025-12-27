import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Upgradex Agency | Digital Marketing & Web Development Services</title>
        <meta
          name="description"
          content="Upgradex Agency helps startups & businesses scale with Web Development, SEO, Paid Ads & Premium Digital Services. Get a free consultation today!"
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <WhyChooseUs />
        <ServicesOverview />
        <IndustriesSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
