import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { coursesData, allCourses } from "@/data/siteData";
import {
  Code2, Coffee, Brain, Cloud, Globe, BarChart3, Cpu, Terminal,
  Server, Layers, Settings, Bot, PenTool, Box, Building2, Cog, ArrowRight, Filter
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2, Coffee, Brain, Cloud, Globe, BarChart3, Cpu, Terminal,
  Server, Layers, Settings, Bot, PenTool, Box, Building2, Cog,
};

const categories = ["All", ...Object.keys(coursesData)];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All"
    ? allCourses
    : coursesData[activeCategory as keyof typeof coursesData] || [];

  return (
    <Layout>
      <Helmet>
        <title>Courses - Prolific Delhi | IT & Industrial Automation Training</title>
        <meta name="description" content="Explore our comprehensive courses in IT, Industrial Automation, and Mechanical Engineering. PLC SCADA, Java, Python, AI, Machine Learning, and more." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-section text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Industry-aligned training programs designed to launch your career in technology and automation
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-muted sticky top-[104px] md:top-[120px] z-40">
        <div className="container-section">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => {
              const Icon = iconMap[course.icon] || Code2;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group h-full flex flex-col">
                    <div className="h-48 bg-gradient-primary flex items-center justify-center">
                      <Icon className="h-20 w-20 text-primary-foreground/80 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{course.description}</p>
                      <div className="flex gap-3">
                        <Button variant="default" asChild className="flex-1">
                          <Link to={`/courses/${course.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline">Enquire</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
