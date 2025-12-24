import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { allCourses } from "@/data/siteData";
import { Clock, Users, Award, BookOpen, ArrowLeft, CheckCircle, Download } from "lucide-react";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = allCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Layout>
        <div className="container-section py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const syllabus = [
    "Introduction and Fundamentals",
    "Core Concepts and Principles",
    "Practical Implementation",
    "Advanced Techniques",
    "Industry Best Practices",
    "Project Work",
    "Certification Preparation",
  ];

  return (
    <Layout>
      <Helmet>
        <title>{course.name} Training - Prolific Delhi</title>
        <meta name="description" content={`Learn ${course.name} with hands-on training at Prolific Delhi. ${course.description}. 100% placement assistance.`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-primary py-16">
        <div className="container-section">
          <Link to="/courses" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Courses
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            {course.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl"
          >
            {course.description}
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Clock, label: "Duration", value: "3-6 Months" },
                  { icon: Users, label: "Batch Size", value: "15-20" },
                  { icon: Award, label: "Certification", value: "Industry" },
                  { icon: BookOpen, label: "Mode", value: "Offline/Online" },
                ].map((item) => (
                  <div key={item.label} className="bg-muted rounded-xl p-4 text-center">
                    <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive {course.name} training program is designed to provide you with in-depth knowledge and practical skills required to excel in the industry. Our expert trainers with 10+ years of experience will guide you through real-world projects and case studies.
                </p>
              </div>

              {/* Syllabus */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                <div className="space-y-3">
                  {syllabus.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {index + 1}
                      </div>
                      <span>{topic}</span>
                    </motion.div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6">
                  <Download className="h-4 w-4 mr-2" /> Download Full Syllabus
                </Button>
              </div>

              {/* Career Opportunities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["Software Engineer", "Technical Lead", "Project Manager", "Consultant", "Freelancer", "Entrepreneur"].map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-36">
                <h3 className="text-xl font-semibold mb-6">Enquire Now</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Textarea placeholder="Your Message" rows={3} />
                  <Button variant="default" className="w-full">Submit Enquiry</Button>
                </form>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-center text-muted-foreground">
                    Or call us directly
                  </div>
                  <a href="tel:+919891740056" className="block text-center text-xl font-semibold text-primary mt-2">
                    +91 9891740056
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
