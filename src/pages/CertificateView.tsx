import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { 
  Printer, 
  Download, 
  ArrowLeft,
  Award,
  CheckCircle,
  XCircle,
  AlertTriangle
} from "lucide-react";
import { format } from "date-fns";
import { QRCodeSVG } from "qrcode.react";
import prolificLogo from "@/assets/prolific-logo.webp";

interface CertificateData {
  id: string;
  certificate_number: string;
  course_name: string;
  issue_date: string;
  validity_date: string | null;
  grade: string;
  status: string;
  students: {
    full_name: string;
    email: string;
    center_name: string;
    completion_date: string | null;
  } | null;
}

const CertificateView = () => {
  const { certificateNumber } = useParams();
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchCertificate();
  }, [certificateNumber]);

  const fetchCertificate = async () => {
    if (!certificateNumber) return;

    try {
      const { data, error } = await supabase
        .from('certificates')
        .select(`
          id,
          certificate_number,
          course_name,
          issue_date,
          validity_date,
          grade,
          status,
          students (
            full_name,
            email,
            center_name,
            completion_date
          )
        `)
        .eq('certificate_number', certificateNumber)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError('Certificate not found');
      } else {
        setCertificate(data);
      }
    } catch (err) {
      console.error('Error fetching certificate:', err);
      setError('Failed to load certificate');
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !certificate) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Certificate Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The certificate you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/verify">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Verify Another Certificate
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const isValid = certificate.status === 'ACTIVE';
  const verifyUrl = `${window.location.origin}/verify?cert=${certificate.certificate_number}`;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Print-hidden controls */}
      <div className="print:hidden bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost">
            <Link to="/verify">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Verification
            </Link>
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </div>
      </div>

      {/* Status Banner (print-hidden) */}
      {!isValid && (
        <div className="print:hidden bg-destructive/10 border-b border-destructive/20">
          <div className="container mx-auto px-4 py-3 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <p className="text-destructive font-medium">
              This certificate has been {certificate.status.toLowerCase()}.
            </p>
          </div>
        </div>
      )}

      {/* Certificate */}
      <div className="container mx-auto px-4 py-8 print:py-0 print:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          ref={printRef}
          className="max-w-4xl mx-auto bg-card border-4 border-primary/20 rounded-lg overflow-hidden print:border-8 print:rounded-none print:max-w-none"
        >
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 text-center">
            <img 
              src={prolificLogo} 
              alt="Prolific Automation" 
              className="h-16 mx-auto mb-4 brightness-0 invert"
            />
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Certificate of Completion
            </h1>
            <p className="text-primary-foreground/80">
              Prolific Systems & Technologies
            </p>
          </div>

          {/* Certificate Body */}
          <div className="p-8 md:p-12">
            {/* Status Badge */}
            <div className="flex justify-center mb-8">
              {isValid ? (
                <div className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Verified & Valid</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full">
                  <XCircle className="h-5 w-5" />
                  <span className="font-medium">{certificate.status}</span>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-4">This is to certify that</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                {certificate.students?.full_name || 'N/A'}
              </h2>
              <p className="text-muted-foreground mb-4">has successfully completed the course</p>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
                {certificate.course_name}
              </h3>
              <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg">
                <p className="text-sm text-muted-foreground">with grade</p>
                <p className="text-3xl font-bold text-primary">{certificate.grade}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Certificate Number</p>
                <p className="font-mono font-medium text-foreground">{certificate.certificate_number}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Issue Date</p>
                <p className="font-medium text-foreground">
                  {format(new Date(certificate.issue_date), 'MMMM dd, yyyy')}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Valid Until</p>
                <p className="font-medium text-foreground">
                  {certificate.validity_date 
                    ? format(new Date(certificate.validity_date), 'MMMM dd, yyyy')
                    : 'Lifetime'}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Center</p>
                <p className="font-medium text-foreground">
                  {certificate.students?.center_name || 'Noida'}
                </p>
              </div>
            </div>

            {/* Signatures */}
            <div className="flex justify-between items-end mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-40 border-b border-foreground mb-2"></div>
                <p className="text-sm text-muted-foreground">Training Director</p>
              </div>
              
              {/* QR Code */}
              <div className="text-center">
                <QRCodeSVG 
                  value={verifyUrl}
                  size={80}
                  level="M"
                  className="mx-auto mb-2"
                />
                <p className="text-xs text-muted-foreground">Scan to verify</p>
              </div>

              <div className="text-center">
                <div className="w-40 border-b border-foreground mb-2"></div>
                <p className="text-sm text-muted-foreground">Head of Training</p>
              </div>
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="bg-muted/50 px-8 py-4 text-center text-sm text-muted-foreground border-t border-border">
            <p>
              This certificate can be verified online at{" "}
              <span className="font-medium text-primary">{window.location.origin}/verify</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
          #root {
            visibility: visible;
          }
          #root > div > div:last-child,
          #root > div > div:last-child * {
            visibility: visible;
          }
        }
      `}</style>
    </div>
  );
};

export default CertificateView;
