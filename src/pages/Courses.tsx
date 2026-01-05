import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Users, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const allCourses = [
  { id: 1, title: "PLC SCADA Training", category: "Automation", duration: "3-6 Months", mode: "Classroom/Online", description: "Master industrial automation with hands-on PLC and SCADA programming." },
  { id: 2, title: "Industrial Automation & Robotics", category: "Automation", duration: "6 Months", mode: "Classroom", description: "Comprehensive training in industrial robots and automation systems." },
  { id: 3, title: "Post Graduate Diploma in Industrial Automation", category: "Automation", duration: "12 Months", mode: "Classroom", description: "Complete diploma program covering all aspects of industrial automation." },
  { id: 4, title: "Certified DCS Application Developer", category: "Automation", duration: "4 Months", mode: "Classroom", description: "Learn Distributed Control Systems for process industries." },
  { id: 5, title: "Machine Learning", category: "IT & Data", duration: "4 Months", mode: "Hybrid", description: "Learn ML algorithms and build predictive models using Python." },
  { id: 6, title: "Data Analytics", category: "IT & Data", duration: "3 Months", mode: "Classroom/Online", description: "Master Excel, SQL, Power BI, and Tableau for data-driven decisions." },
  { id: 7, title: "Data Science", category: "IT & Data", duration: "6 Months", mode: "Hybrid", description: "Complete data science program with Python, Statistics, and ML." },
  { id: 8, title: "Python Programming", category: "IT & Data", duration: "2 Months", mode: "Classroom/Online", description: "Learn Python from basics to advanced programming concepts." },
  { id: 9, title: "SolidWorks", category: "Designing", duration: "2-3 Months", mode: "Classroom", description: "Professional 3D CAD modeling for mechanical design." },
  { id: 10, title: "AutoCAD", category: "Designing", duration: "2 Months", mode: "Classroom/Online", description: "Industry-standard CAD software for civil and mechanical drafting." },
  { id: 11, title: "Revit Architecture", category: "Designing", duration: "3 Months", mode: "Classroom", description: "Building Information Modeling for architecture and construction." },
  { id: 12, title: "CATIA", category: "Designing", duration: "3 Months", mode: "Classroom", description: "Advanced CAD/CAM/CAE for automotive and aerospace design." },
  { id: 13, title: "Embedded Systems Development", category: "Automation", duration: "4-6 Months", mode: "Classroom", description: "Learn microcontroller programming and embedded system design." },
  { id: 14, title: "Electrical Engineering Programs", category: "Automation", duration: "3-6 Months", mode: "Classroom", description: "Comprehensive electrical engineering and power systems training." },
  { id: 15, title: "Power BI", category: "IT & Data", duration: "1 Month", mode: "Classroom/Online", description: "Business intelligence and data visualization with Microsoft Power BI." },
  { id: 16, title: "NX CAD", category: "Designing", duration: "3 Months", mode: "Classroom", description: "Advanced 3D CAD software for product design and manufacturing." },
];

const categories = ["All", "Automation", "IT & Data", "Designing"];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our Training Programs
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Choose from 100+ Industry-Recognized Courses
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-xl overflow-hidden shadow-md card-hover group"
              >
                <div className="h-2 bg-primary" />
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

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

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link to={`/courses/${course.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                      <Link to="/contact">Enquire</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
