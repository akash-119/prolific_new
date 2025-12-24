import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { aboutPoints } from "@/data/siteData";
import { CheckCircle, Award, Target, Eye } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const timeline = [
  { year: "1997", title: "Founded", description: "Started as a small training center in Delhi" },
  { year: "2005", title: "Expansion", description: "Opened 10 branches across North India" },
  { year: "2010", title: "ISO Certified", description: "Achieved ISO 9001-2008 certification" },
  { year: "2015", title: "NSDC Partner", description: "Became NSDC approved training partner" },
  { year: "2020", title: "30 Branches", description: "Expanded to 30 branches pan-India" },
  { year: "2024", title: "Industry 4.0", description: "Launched AI & Industry 4.0 programs" },
];

const certifications = ["ISO 9001-2008", "IAO Certified", "NSDC Approved", "Skill India Partner"];

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Us - Prolific Delhi | 23+ Years of Excellence in Training</title>
        <meta name="description" content="Learn about Prolific Systems & Technologies - Pioneer in Industrial Automation training since 1997. ISO certified, NSDC approved with 30+ branches across India." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-section text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            About Prolific Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Empowering careers through quality education since 1997
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={aboutImage}
              alt="Prolific Training Institute"
              className="rounded-2xl shadow-hover"
            />
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Prolific Systems & Technologies was founded in 1997 with a vision to bridge the gap between academic learning and industry requirements. What started as a small training center has grown into one of India's largest networks of technical training institutes.
              </p>
              <ul className="space-y-3">
                {aboutPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide world-class technical education that empowers individuals with skills demanded by the industry, ensuring successful career placements and professional growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <Eye className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the global leader in technical training and education, creating a workforce ready for Industry 4.0 and beyond through innovation and excellence.
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="section-heading text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center gap-4 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 shadow-card inline-block">
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h2 className="section-heading mb-8">Our Certifications</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 bg-muted px-6 py-3 rounded-full">
                  <Award className="h-5 w-5 text-secondary" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
