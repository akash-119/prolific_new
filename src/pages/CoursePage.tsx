import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import SyllabusDownloadForm from '@/components/SyllabusDownloadForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getCourseBySlug, getRelatedCourses } from '@/data/coursesData';
import { Course } from '@/data/types';
import {
  Clock, Users, Award, Download, ChevronRight, CheckCircle, Briefcase, 
  IndianRupee, Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [relatedCourses, setRelatedCourses] = useState<Course[]>([]);
  const [showSyllabusForm, setShowSyllabusForm] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum'>('overview');

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slug) {
      const foundCourse = getCourseBySlug(slug);
      if (foundCourse) {
        setCourse(foundCourse);
        setRelatedCourses(getRelatedCourses(foundCourse.id, 4));
        window.scrollTo(0, 0);
      } else {
        navigate('/courses');
      }
    }
  }, [slug, navigate]);

  // GSAP animations
  useEffect(() => {
    if (!course || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }
      );

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, delay: 0.2, ease: "power4.out" }
      );

      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-meta",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.5, stagger: 0.1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.7, stagger: 0.1, ease: "back.out(1.2)" }
      );

      // Content section
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Sidebar animation
      if (sidebarRef.current) {
        gsap.fromTo(
          ".sidebar-card",
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sidebarRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [course]);

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: 'Courses', link: '/courses' },
          { label: course.category, link: `/courses?category=${encodeURIComponent(course.category)}` },
          { label: course.title }
        ]}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-primary to-primary/80 py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="hero-badge bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="hero-badge bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                {course.subCategory}
              </span>
            </div>
            
            <h1 className="hero-title text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              {course.title}
            </h1>
            
            <p className="hero-description text-primary-foreground/90 text-lg max-w-3xl mb-6">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 text-primary-foreground/90 mb-8">
              <div className="hero-meta flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <div className="hero-meta flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{course.batchDetails.batchSize}</span>
              </div>
              <div className="hero-meta flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Industry Certified</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={() => setShowSyllabusForm(true)} className="hero-cta hover:scale-105 transition-transform">
                <Download className="mr-2 h-5 w-5" />
                Download Syllabus
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="hero-cta hover:scale-105 transition-transform">
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Main Content */}
            <div ref={contentRef} className="lg:col-span-2 space-y-8">
              {/* Tab Navigation */}
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-primary text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                      activeTab === 'curriculum'
                        ? 'border-b-2 border-primary text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Curriculum
                  </button>
                </div>

                <div className="p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      {/* Description */}
                      <div>
                        <h2 className="text-xl font-heading font-bold text-foreground mb-4">Course Overview</h2>
                        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
                          {course.overview.description}
                        </div>
                      </div>

                      {/* Learning Objectives */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">What You'll Learn</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {course.overview.objectives.map((obj, idx) => (
                            <div key={idx} className="flex gap-3 group hover:bg-muted/50 p-2 rounded-lg transition-colors">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                              <span className="text-sm text-muted-foreground">{obj}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Who Should Attend */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Who Should Attend</h3>
                        <div className="flex flex-wrap gap-2">
                          {course.overview.whoShouldAttend.map((item, idx) => (
                            <span key={idx} className="bg-muted px-3 py-1.5 rounded-full text-sm hover:bg-muted/80 transition-colors cursor-default">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tools */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {course.overview.tools.map((tool, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-default">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Career Opportunities */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-4">Career Opportunities</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {course.careerOpportunities.map((career, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg hover:bg-muted transition-colors group cursor-default">
                              <Briefcase className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform" />
                              <span className="text-sm">{career}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'curriculum' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-heading font-bold">Course Curriculum</h2>
                        <span className="text-sm text-muted-foreground">
                          {course.curriculum.totalModules} Modules • {course.curriculum.totalHours} Hours
                        </span>
                      </div>

                      <Accordion type="multiple" className="space-y-3">
                        {course.curriculum.modules.map((module, idx) => (
                          <AccordionItem key={idx} value={`module-${idx}`} className="border rounded-lg overflow-hidden">
                            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-4 text-left">
                                <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                  {module.moduleNumber}
                                </span>
                                <div>
                                  <p className="font-semibold">{module.title}</p>
                                  <p className="text-xs text-muted-foreground">{module.duration}</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4">
                              <div className="pl-12">
                                <p className="text-sm font-medium text-muted-foreground mb-2">Topics Covered:</p>
                                <ul className="space-y-1">
                                  {module.topics.map((topic, topicIdx) => (
                                    <li key={topicIdx} className="flex items-center gap-2 text-sm">
                                      <ChevronRight className="h-3 w-3 text-primary" />
                                      {topic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>

                      <div className="bg-accent/10 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold">Want detailed module-wise syllabus?</p>
                          <p className="text-sm text-muted-foreground">Get the complete PDF with lab exercises and projects</p>
                        </div>
                        <Button onClick={() => setShowSyllabusForm(true)} className="hover:scale-105 transition-transform">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-card rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-heading font-bold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible>
                  {course.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right: Sticky Sidebar */}
            <div ref={sidebarRef} className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Course Fee Card */}
                <div className="sidebar-card bg-card rounded-lg shadow-sm border p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-heading font-bold mb-4">Course Fee</h4>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary flex items-center">
                      <IndianRupee className="h-6 w-6" />
                      {course.fees.discounted.toLocaleString()}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{course.fees.original.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">EMI options available from ₹5,000/month</p>
                  <Button className="w-full hover:scale-105 transition-transform" size="lg" asChild>
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </div>

                {/* Quick Enquiry */}
                <div className="sidebar-card bg-card rounded-lg shadow-sm border p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-heading font-bold mb-4">Quick Enquiry</h4>
                  <form className="space-y-3">
                    <Input placeholder="Your Name" className="transition-all focus:scale-[1.02]" />
                    <Input placeholder="Email" type="email" className="transition-all focus:scale-[1.02]" />
                    <Input placeholder="Phone" className="transition-all focus:scale-[1.02]" />
                    <Button className="w-full hover:scale-105 transition-transform">Submit Enquiry</Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Our counselor will contact you within 24 hours
                  </p>
                </div>

                {/* Related Courses */}
                {relatedCourses.length > 0 && (
                  <div className="sidebar-card bg-card rounded-lg shadow-sm border p-6 hover:shadow-lg transition-shadow">
                    <h4 className="font-heading font-bold mb-4">Related Courses</h4>
                    <div className="space-y-3">
                      {relatedCourses.map((relCourse) => (
                        <Link
                          key={relCourse.id}
                          to={`/courses/${relCourse.slug}`}
                          className="block p-3 rounded-lg hover:bg-muted transition-all hover:translate-x-1"
                        >
                          <p className="font-medium text-sm hover:text-primary transition-colors">{relCourse.title}</p>
                          <p className="text-xs text-muted-foreground">{relCourse.duration}</p>
                        </Link>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 hover:scale-105 transition-transform" asChild>
                      <Link to="/courses">View All Courses</Link>
                    </Button>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="sidebar-card bg-secondary/10 rounded-lg p-4 text-center hover:bg-secondary/20 transition-colors">
                  <p className="font-medium mb-2">Need Help?</p>
                  <a href="tel:+919891740056" className="flex items-center justify-center gap-2 text-secondary font-bold hover:scale-105 transition-transform">
                    <Phone className="h-4 w-4" />
                    +91-9891740056
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Download Form Modal */}
      {showSyllabusForm && (
        <SyllabusDownloadForm course={course} onClose={() => setShowSyllabusForm(false)} />
      )}
    </Layout>
  );
};

export default CoursePage;
