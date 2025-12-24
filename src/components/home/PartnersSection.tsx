import { motion } from "framer-motion";

const partners = [
  "Siemens", "ABB", "Schneider", "Honeywell", "Rockwell", 
  "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra",
  "L&T", "Bosch", "Delta", "Mitsubishi", "Allen Bradley"
];

export default function PartnersSection() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container-section mb-12">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Our Corporate Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Trusted by 600+ leading companies worldwide
          </motion.p>
        </div>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-36 h-20 bg-muted rounded-lg flex items-center justify-center px-4">
                <span className="font-semibold text-lg text-muted-foreground">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
