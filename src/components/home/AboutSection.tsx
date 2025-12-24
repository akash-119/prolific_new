import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { aboutPoints } from "@/data/siteData";
import aboutImage from "@/assets/about-image.jpg";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-hover">
              <img
                src={aboutImage}
                alt="Prolific Training Institute"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-4xl font-bold">23+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="section-heading mt-2">
              About Prolific Systems & Technologies
            </h2>
            <p className="text-muted-foreground mb-8">
              Leading the way in technical education and professional development for over two decades.
            </p>

            <ul className="space-y-4 mb-8">
              {aboutPoints.slice(0, 6).map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{point}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
