import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { 
  Award, 
  CheckCircle, 
  XCircle, 
  Calendar,
  Users,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface DashboardStats {
  totalCertificates: number;
  validCertificates: number;
  revokedCertificates: number;
  thisMonthCertificates: number;
  totalStudents: number;
}

interface RecentCertificate {
  id: string;
  certificate_number: string;
  course_name: string;
  issue_date: string;
  status: string;
  students: {
    full_name: string;
  } | null;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalCertificates: 0,
    validCertificates: 0,
    revokedCertificates: 0,
    thisMonthCertificates: 0,
    totalStudents: 0,
  });
  const [recentCertificates, setRecentCertificates] = useState<RecentCertificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch total certificates
      const { count: totalCerts } = await supabase
        .from('certificates')
        .select('*', { count: 'exact', head: true });

      // Fetch valid certificates
      const { count: validCerts } = await supabase
        .from('certificates')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'ACTIVE');

      // Fetch revoked certificates
      const { count: revokedCerts } = await supabase
        .from('certificates')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'REVOKED');

      // Fetch this month's certificates
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);
      
      const { count: monthCerts } = await supabase
        .from('certificates')
        .select('*', { count: 'exact', head: true })
        .gte('issue_date', startOfMonth.toISOString().split('T')[0]);

      // Fetch total students
      const { count: totalStudents } = await supabase
        .from('students')
        .select('*', { count: 'exact', head: true });

      // Fetch recent certificates
      const { data: recent } = await supabase
        .from('certificates')
        .select(`
          id,
          certificate_number,
          course_name,
          issue_date,
          status,
          students (
            full_name
          )
        `)
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalCertificates: totalCerts || 0,
        validCertificates: validCerts || 0,
        revokedCertificates: revokedCerts || 0,
        thisMonthCertificates: monthCerts || 0,
        totalStudents: totalStudents || 0,
      });

      setRecentCertificates(recent || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Certificates',
      value: stats.totalCertificates,
      icon: Award,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Valid Certificates',
      value: stats.validCertificates,
      icon: CheckCircle,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: 'Revoked Certificates',
      value: stats.revokedCertificates,
      icon: XCircle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
    {
      title: 'Issued This Month',
      value: stats.thisMonthCertificates,
      icon: Calendar,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to the Certificate Management System</p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link to="/admin/students">
                <Users className="h-4 w-4 mr-2" />
                Add Student
              </Link>
            </Button>
            <Button asChild>
              <Link to="/admin/certificates">
                <Award className="h-4 w-4 mr-2" />
                Generate Certificate
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {loading ? '...' : stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {loading ? '...' : stats.totalStudents}
                </p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {loading ? '...' : `${stats.totalCertificates > 0 ? Math.round((stats.validCertificates / stats.totalCertificates) * 100) : 0}%`}
                </p>
                <p className="text-sm text-muted-foreground">Valid Rate</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border border-border rounded-xl"
        >
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-heading font-bold text-foreground">Recent Certificates</h2>
            <Button asChild variant="ghost" size="sm">
              <Link to="/admin/certificates">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
          
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      Loading...
                    </td>
                  </tr>
                ) : recentCertificates.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No certificates issued yet.{" "}
                      <Link to="/admin/certificates" className="text-primary hover:underline">
                        Generate your first certificate
                      </Link>
                    </td>
                  </tr>
                ) : (
                  recentCertificates.map((cert) => (
                    <tr key={cert.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-mono text-sm text-foreground">
                          {cert.certificate_number}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground">
                        {cert.students?.full_name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {cert.course_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {format(new Date(cert.issue_date), 'MMM dd, yyyy')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                          {cert.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
