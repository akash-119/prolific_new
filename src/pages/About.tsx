import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Check, Award, Building, Users, Target, Eye, Heart } from "lucide-react";
import heroCenter from "@/assets/hero-training-center.jpg";

const timeline = [
  { year: "1997", title: "Foundation", description: "Prolific Systems & Technologies was established in Noida" },
  { year: "2005", title: "Expansion", description: "Opened 10+ branches across North India" },
  { year: "2010", title: "ISO Certification", description: "Received ISO 9001-2008 certification" },
  { year: "2015", title: "NSDC Partnership", description: "Became NSDC approved training partner" },
  { year: "2018", title: "UDAAN Program", description: "Selected for ₹60 crore MHA sponsored program" },
  { year: "2024", title: "30+ Branches", description: "Expanded to 30+ branches across India" },
];

const values = [
  { icon: Target, title: "Mission", description: "To provide world-class industrial training that bridges the gap between academic knowledge and industry requirements." },
  { icon: Heart, title: "Values", description: "Excellence, Integrity, Innovation, and Student Success drive everything we do." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroCenter} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              About Prolific Systems & Technologies
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Prolific in Industrial Automation Training Since 1997
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1997, Prolific Systems & Technologies has been at the forefront of industrial automation training in India for over 27 years. What started as a small training center in Noida has grown into a nationwide network of 30+ branches.
              </p>
              <p className="text-muted-foreground mb-4">
                We have trained over 1,20,000 professionals and partnered with 600+ corporations including 50+ Fortune 1000 companies. Our commitment to practical, industry-relevant training has made us the preferred choice for aspiring automation professionals.
              </p>
              <p className="text-muted-foreground">
                With strategic investment from Aref Group (Kuwait) and partnerships with NSDC and MHA, we continue to expand our reach and impact in the technical education sector.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, label: "ISO 9001-2008", value: "Certified" },
                { icon: Building, label: "Branches", value: "30+" },
                { icon: Users, label: "Students Trained", value: "1.2 Lakh+" },
                { icon: Award, label: "Corporate Partners", value: "600+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card p-6 rounded-xl shadow-md text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-md text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-foreground text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="shrink-0 w-20 text-right">
                  <span className="text-xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary border-4 border-card" />
                  <div className="pl-6 border-l-2 border-primary/20 pb-8">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
