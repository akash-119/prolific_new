import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideoSection from "@/components/home/VideoSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Prolific Delhi - Pioneer in Industrial Automation & IT Training Since 1997</title>
        <meta
          name="description"
          content="Leading training institute for Industrial Automation, PLC SCADA, Java, Python, AI, and more. 30+ branches, 1.2 Lakh+ students trained, 100% placement assistance."
        />
        <meta name="keywords" content="PLC SCADA training, Industrial automation, IT courses, Java training, Python training, AI ML courses, Noida training institute" />
        <link rel="canonical" href="https://prolificdelhi.com" />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <VideoSection />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
}
