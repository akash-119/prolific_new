import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Star, Building, TrendingUp, Users, Award } from "lucide-react";

const placements = [
  { name: "Pratham Arora", company: "Siemens", position: "Automation Engineer", course: "PLC SCADA" },
  { name: "Harsh Dubey", company: "ABB", position: "Control Engineer", course: "Industrial Automation" },
  { name: "Mohit Gupta", company: "Infosys", position: "Data Analyst", course: "Data Analytics" },
  { name: "Amit Rai", company: "L&T", position: "Design Engineer", course: "SolidWorks" },
  { name: "Ritik Sharma", company: "Bosch", position: "Embedded Developer", course: "Embedded Systems" },
  { name: "Priya Singh", company: "Schneider", position: "PLC Programmer", course: "PLC SCADA" },
  { name: "Rahul Verma", company: "Honeywell", position: "Systems Engineer", course: "DCS Training" },
  { name: "Neha Agarwal", company: "TCS", position: "ML Engineer", course: "Machine Learning" },
];

const hiringPartners = [
  "Siemens", "ABB", "Schneider Electric", "Rockwell Automation", "Bosch", "L&T",
  "BHEL", "Infosys", "TCS", "Wipro", "Honeywell", "Emerson", "GE", "Yokogawa",
  "Delta Electronics", "Mitsubishi", "Fanuc", "Kuka", "Allen Bradley", "Phoenix Contact"
];

const stats = [
  { icon: Users, label: "Students Placed", value: "50,000+" },
  { icon: Building, label: "Hiring Partners", value: "600+" },
  { icon: TrendingUp, label: "Avg. Salary Hike", value: "40%" },
  { icon: Award, label: "Placement Rate", value: "95%" },
];

const Placements = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Placements
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg">
            Our students work at the world's top companies
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-md text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-foreground text-center mb-12"
          >
            Recent Placements
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((placement, index) => (
              <motion.div
                key={placement.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-md text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {placement.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{placement.name}</h3>
                <p className="text-primary font-medium">{placement.company}</p>
                <p className="text-sm text-muted-foreground">{placement.position}</p>
                <span className="inline-block mt-2 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                  {placement.course}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-foreground text-center mb-4"
          >
            Our Hiring Partners
          </motion.h2>
          <p className="text-center text-muted-foreground mb-12">
            600+ companies trust us for their hiring needs
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {hiringPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-6 py-3 bg-card rounded-lg shadow-sm font-medium text-muted-foreground hover:text-primary hover:shadow-md transition-all"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
