import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All Courses", "Automation", "IT & Data Analytics", "Designing"];

const courses = [
  {
    id: "plc-scada-training",
    title: "PLC SCADA Training",
    category: "Automation",
    duration: "3-6 Months",
    mode: "Classroom/Online",
    description: "Master industrial automation with hands-on PLC and SCADA programming.",
    features: ["Industry Expert Trainers", "Real PLC Hardware", "100% Placement"],
    badge: "Popular",
    color: "bg-primary",
  },
  {
    id: "industrial-automation-robotics",
    title: "Industrial Automation & Robotics",
    category: "Automation",
    duration: "6 Months",
    mode: "Classroom",
    description: "Comprehensive training in industrial robots and automation systems.",
    features: ["Robotic Arms Training", "Industry 4.0 Ready", "Live Projects"],
    badge: "Trending",
    color: "bg-secondary",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "IT & Data Analytics",
    duration: "4 Months",
    mode: "Hybrid",
    description: "Learn ML algorithms and build predictive models using Python.",
    features: ["Python Programming", "Real Datasets", "Career Support"],
    badge: "New",
    color: "bg-accent",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "IT & Data Analytics",
    duration: "3 Months",
    mode: "Classroom/Online",
    description: "Master Excel, SQL, Power BI, and Tableau for data-driven decisions.",
    features: ["Industry Tools", "Certification", "Job Ready"],
    badge: "Popular",
    color: "bg-primary",
  },
  {
    id: "solidworks",
    title: "SolidWorks",
    category: "Designing",
    duration: "2-3 Months",
    mode: "Classroom",
    description: "Professional 3D CAD modeling for mechanical design.",
    features: ["3D Modeling", "Assembly Design", "CSWA Prep"],
    badge: "",
    color: "bg-primary",
  },
  {
    id: "autocad",
    title: "AutoCAD",
    category: "Designing",
    duration: "2 Months",
    mode: "Classroom/Online",
    description: "Industry-standard CAD software for civil and mechanical drafting.",
    features: ["2D & 3D Drafting", "Industry Projects", "Certification"],
    badge: "",
    color: "bg-accent",
  },
  {
    id: "data-science",
    title: "Data Science",
    category: "IT & Data Analytics",
    duration: "6 Months",
    mode: "Hybrid",
    description: "Complete data science program with Python, Statistics, and ML.",
    features: ["Python & R", "MongoDB", "Capstone Project"],
    badge: "Trending",
    color: "bg-secondary",
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    category: "Automation",
    duration: "4-6 Months",
    mode: "Classroom",
    description: "Learn microcontroller programming and embedded system design.",
    features: ["ARM Cortex", "RTOS", "Hardware Labs"],
    badge: "",
    color: "bg-primary",
  },
];

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filteredCourses =
    activeCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        ".courses-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".courses-header",
            start: "top 85%",
          },
        }
      );

      // Animate category tabs
      gsap.fromTo(
        ".category-tabs",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".category-tabs",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate cards on filter change
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: index * 0.08,
            ease: "power2.out",
          }
        );
      }
    });
  }, [activeCategory, filteredCourses]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="courses-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Popular Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 100+ Industry-Recognized Courses designed by industry experts
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-primary/10 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className={`h-2 ${course.color}`} />
              <div className="p-6">
                {course.badge && (
                  <Badge className="mb-3 bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {course.badge}
                  </Badge>
                )}
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.mode}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {course.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <ChevronRight className="h-3 w-3 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild className="hover:scale-105 transition-transform">
            <Link to="/courses">
              View All Courses <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
