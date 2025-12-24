import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, Search, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const certificationPartners = ["NSDC", "IAO", "ISO", "Skill India", "AICTE"];

export default function CertificatePage() {
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Certificate verification is being processed...");
  };

  return (
    <Layout>
      <Helmet>
        <title>Certificate Verification - Prolific Delhi</title>
        <meta name="description" content="Verify your Prolific Delhi training certificate. Industry-recognized certifications from ISO, NSDC, and IAO certified institute." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-section text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Certificate Verification
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Verify the authenticity of your Prolific training certificate
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-section">
          {/* Verification Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto bg-card rounded-2xl p-8 shadow-card mb-20"
          >
            <div className="text-center mb-8">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Verify Your Certificate</h2>
              <p className="text-muted-foreground mt-2">
                Enter your certificate number to verify its authenticity
              </p>
            </div>
            <form onSubmit={handleVerify} className="space-y-4">
              <Input placeholder="Enter Certificate Number (e.g., PROL-2024-12345)" required />
              <Button type="submit" className="w-full" size="lg">
                <Search className="h-4 w-4 mr-2" /> Verify Certificate
              </Button>
            </form>
          </motion.div>

          {/* Certificate Benefits */}
          <div className="mb-20">
            <h2 className="section-heading text-center mb-12">Our Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Industry-recognized credentials",
                "Validated by employers worldwide",
                "QR code for instant verification",
                "Lifetime validity",
                "Digital and physical copies",
                "Government-approved programs",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-muted rounded-xl"
                >
                  <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="text-center">
            <h2 className="section-heading mb-8">Certification Partners</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {certificationPartners.map((partner) => (
                <div key={partner} className="w-32 h-20 bg-muted rounded-xl flex items-center justify-center">
                  <span className="font-semibold text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
