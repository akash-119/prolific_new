import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CertificationsSection from "@/components/home/CertificationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CorporatePartners from "@/components/home/CorporatePartners";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <CertificationsSection />
      <TestimonialsSection />
      <CorporatePartners />
      <CTASection />
    </Layout>
  );
};

export default Index;
