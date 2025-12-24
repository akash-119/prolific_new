import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { testimonials, stats } from "@/data/siteData";
import { Star, TrendingUp, Users, Building2, Award } from "lucide-react";

const placementStats = [
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
  { icon: Users, value: "1.2L+", label: "Students Placed" },
  { icon: Building2, value: "600+", label: "Hiring Partners" },
  { icon: Award, value: "₹8 LPA", label: "Avg. Package" },
];

export default function PlacementsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Placements - Prolific Delhi | 100% Placement Assistance</title>
        <meta name="description" content="Prolific Delhi offers 100% placement assistance with 600+ corporate partners. Join 1.2 lakh+ successfully placed students." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-section text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Placements & Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Join thousands of successful professionals who started their journey with us
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container-section">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 text-center shadow-card"
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-section">
          <h2 className="section-heading text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{story.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.position}</div>
                    <div className="text-sm text-primary font-medium">{story.company}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">"{story.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-muted">
        <div className="container-section text-center">
          <h2 className="section-heading mb-8">Our Hiring Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Siemens", "ABB", "TCS", "Infosys", "Wipro", "HCL", "L&T", "Bosch", "Schneider", "Honeywell", "Tech Mahindra", "Rockwell"].map((company) => (
              <div key={company} className="bg-card px-6 py-3 rounded-lg shadow-card">
                <span className="font-medium text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
