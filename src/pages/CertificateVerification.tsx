import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Search, CheckCircle, XCircle, Shield, Award, ExternalLink } from "lucide-react";
import { format } from "date-fns";

interface VerificationResult {
  status: 'idle' | 'loading' | 'valid' | 'revoked' | 'not_found';
  data?: {
    certificate_number: string;
    student_name: string;
    course_name: string;
    center_name: string;
    issue_date: string;
    validity_date: string | null;
    grade: string;
    cert_status: string;
  };
}

const CertificateVerification = () => {
  const [searchParams] = useSearchParams();
  const initialCert = searchParams.get('cert') || '';
  const [certificateNumber, setCertificateNumber] = useState(initialCert);
  const [result, setResult] = useState<VerificationResult>({ status: 'idle' });

  const handleVerify = async () => {
    if (!certificateNumber.trim()) return;

    setResult({ status: 'loading' });

    try {
      const { data, error } = await supabase
        .from('certificates')
        .select(`
          certificate_number,
          course_name,
          issue_date,
          validity_date,
          grade,
          status,
          students (
            full_name,
            center_name
          )
        `)
        .eq('certificate_number', certificateNumber.trim().toUpperCase())
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setResult({ status: 'not_found' });
        return;
      }

      if (data.status === 'REVOKED' || data.status === 'EXPIRED') {
        setResult({
          status: 'revoked',
          data: {
            certificate_number: data.certificate_number,
            student_name: data.students?.full_name || 'N/A',
            course_name: data.course_name,
            center_name: data.students?.center_name || 'N/A',
            issue_date: data.issue_date,
            validity_date: data.validity_date,
            grade: data.grade,
            cert_status: data.status,
          }
        });
        return;
      }

      setResult({
        status: 'valid',
        data: {
          certificate_number: data.certificate_number,
          student_name: data.students?.full_name || 'N/A',
          course_name: data.course_name,
          center_name: data.students?.center_name || 'N/A',
          issue_date: data.issue_date,
          validity_date: data.validity_date,
          grade: data.grade,
          cert_status: data.status,
        }
      });
    } catch (error) {
      console.error('Verification error:', error);
      setResult({ status: 'not_found' });
    }
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
                    Example: PROLIFIC-2026-000001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter certificate number..."
                    value={certificateNumber}
                    onChange={(e) => {
                      setCertificateNumber(e.target.value.toUpperCase());
                      if (result.status !== 'idle' && result.status !== 'loading') {
                        setResult({ status: 'idle' });
                      }
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                    className="pl-10 uppercase"
                  />
                </div>
                <Button
                  variant="default"
                  onClick={handleVerify}
                  disabled={!certificateNumber.trim() || result.status === 'loading'}
                >
                  {result.status === 'loading' ? "Verifying..." : "Verify"}
                </Button>
              </div>
            </motion.div>

            {/* Verification Result - Valid */}
            {result.status === 'valid' && result.data && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-accent/10 border border-accent"
              >
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <div>
                    <h3 className="text-xl font-bold text-accent">Certificate Verified!</h3>
                    <p className="text-muted-foreground">
                      This certificate is authentic and valid.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <p className="text-muted-foreground">Certificate Number</p>
                    <p className="font-mono font-medium text-foreground">{result.data.certificate_number}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Student Name</p>
                    <p className="font-medium text-foreground">{result.data.student_name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Course</p>
                    <p className="font-medium text-foreground">{result.data.course_name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Grade</p>
                    <p className="font-medium text-foreground">{result.data.grade}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Issue Date</p>
                    <p className="font-medium text-foreground">
                      {format(new Date(result.data.issue_date), 'MMMM dd, yyyy')}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Valid Until</p>
                    <p className="font-medium text-foreground">
                      {result.data.validity_date 
                        ? format(new Date(result.data.validity_date), 'MMMM dd, yyyy')
                        : 'Lifetime'}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Center</p>
                    <p className="font-medium text-foreground">{result.data.center_name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-medium text-accent">{result.data.cert_status}</p>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link to={`/certificate/${result.data.certificate_number}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Full Certificate
                  </Link>
                </Button>
              </motion.div>
            )}

            {/* Verification Result - Revoked/Expired */}
            {result.status === 'revoked' && result.data && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-destructive/10 border border-destructive"
              >
                <div className="flex items-center gap-4">
                  <XCircle className="h-12 w-12 text-destructive" />
                  <div>
                    <h3 className="text-xl font-bold text-destructive">
                      Certificate {result.data.cert_status === 'REVOKED' ? 'Revoked' : 'Expired'}
                    </h3>
                    <p className="text-muted-foreground">
                      This certificate exists but is no longer valid.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-destructive/20">
                  <p className="text-sm text-muted-foreground">
                    Certificate Number: <span className="font-mono">{result.data.certificate_number}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Student: {result.data.student_name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Please contact our office for more information.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Verification Result - Not Found */}
            {result.status === 'not_found' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-destructive/10 border border-destructive"
              >
                <div className="flex items-center gap-4">
                  <XCircle className="h-12 w-12 text-destructive" />
                  <div>
                    <h3 className="text-xl font-bold text-destructive">Certificate Not Found</h3>
                    <p className="text-muted-foreground">
                      Please check the certificate number and try again. Contact us if you need assistance.
                    </p>
                  </div>
                </div>
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
                Our certificates contain QR codes, unique serial numbers, and digital verification for authenticity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificateVerification;
