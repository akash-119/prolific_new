import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, XCircle, Shield, Award } from "lucide-react";

const CertificateVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState<"idle" | "valid" | "invalid">("idle");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setVerificationResult(certificateNumber.length > 5 ? "valid" : "invalid");
      setIsLoading(false);
    }, 1500);
  };

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
            Certificate Verification
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg">
            Verify the authenticity of your Prolific certificate
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Verification Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card p-8 rounded-xl shadow-lg mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground">
                    Enter Certificate Number
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Find your certificate number on the bottom right of your certificate
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="e.g., PROL-2024-001234"
                    value={certificateNumber}
                    onChange={(e) => {
                      setCertificateNumber(e.target.value);
                      setVerificationResult("idle");
                    }}
                    className="pl-10"
                  />
                </div>
                <Button
                  variant="default"
                  onClick={handleVerify}
                  disabled={!certificateNumber || isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify"}
                </Button>
              </div>
            </motion.div>

            {/* Verification Result */}
            {verificationResult !== "idle" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-xl ${
                  verificationResult === "valid"
                    ? "bg-accent/10 border border-accent"
                    : "bg-destructive/10 border border-destructive"
                }`}
              >
                <div className="flex items-center gap-4">
                  {verificationResult === "valid" ? (
                    <>
                      <CheckCircle className="h-12 w-12 text-accent" />
                      <div>
                        <h3 className="text-xl font-bold text-accent">Certificate Verified!</h3>
                        <p className="text-muted-foreground">
                          This certificate is authentic and was issued by Prolific Systems & Technologies.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-12 w-12 text-destructive" />
                      <div>
                        <h3 className="text-xl font-bold text-destructive">Certificate Not Found</h3>
                        <p className="text-muted-foreground">
                          Please check the certificate number and try again. Contact us if you need assistance.
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {verificationResult === "valid" && (
                  <div className="mt-6 pt-6 border-t border-accent/20 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Certificate Holder</p>
                      <p className="font-medium text-foreground">Sample Student Name</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Course</p>
                      <p className="font-medium text-foreground">PLC SCADA Training</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Issue Date</p>
                      <p className="font-medium text-foreground">January 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Valid Until</p>
                      <p className="font-medium text-foreground">Lifetime</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Security Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <Award className="h-5 w-5" />
                <span>All certificates include security features</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our certificates contain QR codes, unique serial numbers, and holographic seals for authenticity verification.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificateVerification;
