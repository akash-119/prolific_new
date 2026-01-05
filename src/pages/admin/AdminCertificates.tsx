import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { 
  Plus, 
  Search, 
  Edit, 
  XCircle, 
  ChevronLeft, 
  ChevronRight,
  Award,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import { format } from "date-fns";

interface Student {
  id: string;
  full_name: string;
  email: string;
  course_name: string;
}

interface Certificate {
  id: string;
  certificate_number: string;
  course_name: string;
  issue_date: string;
  validity_date: string | null;
  grade: string;
  status: string;
  students: {
    id: string;
    full_name: string;
    email: string;
  } | null;
}

const ITEMS_PER_PAGE = 10;

const AdminCertificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [revokeCertificate, setRevokeCertificate] = useState<Certificate | null>(null);
  const [generatedCert, setGeneratedCert] = useState<{ number: string; id: string } | null>(null);
  const [formData, setFormData] = useState({
    student_id: "",
    course_name: "",
    issue_date: new Date().toISOString().split('T')[0],
    validity_date: "",
    grade: "A",
  });
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    fetchCertificates();
    fetchStudents();
  }, [currentPage, searchTerm, statusFilter]);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('id, full_name, email, course_name')
        .order('full_name');

      if (error) throw error;
      setStudents(data || []);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      let query = supabase
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
            id,
            full_name,
            email
          )
        `, { count: 'exact' });

      if (searchTerm) {
        query = query.or(`certificate_number.ilike.%${searchTerm}%,course_name.ilike.%${searchTerm}%`);
      }

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter as 'ACTIVE' | 'REVOKED' | 'EXPIRED');
      }

      const { data, count, error } = await query
        .order('created_at', { ascending: false })
        .range((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE - 1);

      if (error) throw error;

      setCertificates(data || []);
      setTotalCount(count || 0);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      toast.error('Failed to fetch certificates');
    } finally {
      setLoading(false);
    }
  };

  const handleStudentSelect = (studentId: string) => {
    const student = students.find(s => s.id === studentId);
    setFormData({
      ...formData,
      student_id: studentId,
      course_name: student?.course_name || formData.course_name,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      if (editingCertificate) {
        // Update existing certificate
        const { error } = await supabase
          .from('certificates')
          .update({
            course_name: formData.course_name,
            validity_date: formData.validity_date || null,
            grade: formData.grade,
          })
          .eq('id', editingCertificate.id);

        if (error) throw error;
        toast.success('Certificate updated successfully');
        resetForm();
      } else {
        // Generate new certificate number using the database function
        const { data: certNumber, error: genError } = await supabase
          .rpc('generate_certificate_number');

        if (genError) throw genError;

        // Create new certificate
        const { data, error } = await supabase
          .from('certificates')
          .insert({
            certificate_number: certNumber,
            student_id: formData.student_id,
            course_name: formData.course_name,
            issue_date: formData.issue_date,
            validity_date: formData.validity_date || null,
            grade: formData.grade,
            status: 'ACTIVE',
          })
          .select()
          .single();

        if (error) throw error;
        
        setGeneratedCert({ number: certNumber, id: data.id });
        toast.success('Certificate generated successfully!');
      }

      fetchCertificates();
    } catch (error: any) {
      console.error('Error saving certificate:', error);
      toast.error(error.message || 'Failed to save certificate');
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (cert: Certificate) => {
    setEditingCertificate(cert);
    setFormData({
      student_id: cert.students?.id || "",
      course_name: cert.course_name,
      issue_date: cert.issue_date,
      validity_date: cert.validity_date || "",
      grade: cert.grade,
    });
    setIsDialogOpen(true);
  };

  const handleRevoke = async () => {
    if (!revokeCertificate) return;

    try {
      const { error } = await supabase
        .from('certificates')
        .update({ status: 'REVOKED' })
        .eq('id', revokeCertificate.id);

      if (error) throw error;
      toast.success('Certificate revoked successfully');
      fetchCertificates();
    } catch (error: any) {
      console.error('Error revoking certificate:', error);
      toast.error(error.message || 'Failed to revoke certificate');
    } finally {
      setRevokeCertificate(null);
    }
  };

  const resetForm = () => {
    setFormData({
      student_id: "",
      course_name: "",
      issue_date: new Date().toISOString().split('T')[0],
      validity_date: "",
      grade: "A",
    });
    setEditingCertificate(null);
    setGeneratedCert(null);
    setIsDialogOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-accent/10 text-accent';
      case 'REVOKED':
        return 'bg-destructive/10 text-destructive';
      case 'EXPIRED':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Certificates</h1>
            <p className="text-muted-foreground">Generate and manage certificates</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            if (!open) resetForm();
            setIsDialogOpen(open);
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Generate Certificate
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>
                  {editingCertificate ? 'Edit Certificate' : 'Generate New Certificate'}
                </DialogTitle>
              </DialogHeader>
              
              {generatedCert ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Certificate Generated!</h3>
                  <p className="text-muted-foreground mb-4">Certificate Number:</p>
                  <p className="font-mono text-lg bg-muted px-4 py-2 rounded-lg inline-block mb-6">
                    {generatedCert.number}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button asChild variant="outline">
                      <Link to={`/certificate/${generatedCert.number}`} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Link>
                    </Button>
                    <Button onClick={resetForm}>
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!editingCertificate && (
                    <div className="space-y-2">
                      <Label htmlFor="student">Select Student *</Label>
                      <Select
                        value={formData.student_id}
                        onValueChange={handleStudentSelect}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a student" />
                        </SelectTrigger>
                        <SelectContent>
                          {students.map((student) => (
                            <SelectItem key={student.id} value={student.id}>
                              {student.full_name} ({student.email})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="course_name">Course Name *</Label>
                    <Input
                      id="course_name"
                      value={formData.course_name}
                      onChange={(e) => setFormData({ ...formData, course_name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {!editingCertificate && (
                      <div className="space-y-2">
                        <Label htmlFor="issue_date">Issue Date *</Label>
                        <Input
                          id="issue_date"
                          type="date"
                          value={formData.issue_date}
                          onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
                          required
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <Label htmlFor="validity_date">Validity Date</Label>
                      <Input
                        id="validity_date"
                        type="date"
                        value={formData.validity_date}
                        onChange={(e) => setFormData({ ...formData, validity_date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade</Label>
                      <Select
                        value={formData.grade}
                        onValueChange={(value) => setFormData({ ...formData, grade: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={formLoading || (!editingCertificate && !formData.student_id)}>
                      {formLoading ? 'Processing...' : (editingCertificate ? 'Update' : 'Generate Certificate')}
                    </Button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by certificate number or course..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={(value) => {
                setStatusFilter(value);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="ACTIVE">Active</SelectItem>
                <SelectItem value="REVOKED">Revoked</SelectItem>
                <SelectItem value="EXPIRED">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Certificate Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Issue Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : certificates.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center">
                      <Award className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground">No certificates found</p>
                      <Button
                        variant="link"
                        className="mt-2"
                        onClick={() => setIsDialogOpen(true)}
                      >
                        Generate your first certificate
                      </Button>
                    </td>
                  </tr>
                ) : (
                  certificates.map((cert) => (
                    <tr key={cert.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          to={`/certificate/${cert.certificate_number}`}
                          target="_blank"
                          className="font-mono text-sm text-primary hover:underline"
                        >
                          {cert.certificate_number}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        {cert.students?.full_name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {cert.course_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {format(new Date(cert.issue_date), 'MMM dd, yyyy')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-medium text-foreground">{cert.grade}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                          {cert.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                          >
                            <Link to={`/certificate/${cert.certificate_number}`} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(cert)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          {cert.status === 'ACTIVE' && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => setRevokeCertificate(cert)}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, totalCount)} of {totalCount} certificates
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Revoke Confirmation */}
      <AlertDialog open={!!revokeCertificate} onOpenChange={() => setRevokeCertificate(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke Certificate</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to revoke certificate "{revokeCertificate?.certificate_number}"? This will mark the certificate as invalid and it will show as revoked during verification.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRevoke}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Revoke Certificate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default AdminCertificates;
