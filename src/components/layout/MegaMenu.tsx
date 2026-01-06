import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const automationCourses = [
  { title: "Automation Overview", href: "/courses/industrial-automation-overview" },
  { title: "Post Graduate Diploma in Industrial Automation", href: "/courses/pgdia" },
  { title: "PLC/SCADA/HMI Training", href: "/courses/plc-scada-training" },
  { title: "Industrial Automation & Robotics", href: "/courses/industrial-automation-robotics" },
  { title: "Certified DCS Application Developer", href: "/courses/dcs-training" },
  { title: "Industrial Networking (Profibus/Modbus)", href: "/courses/industrial-networking" },
  { title: "Electrical Engineering Programs", href: "/courses/electrical-engineering" },
  { title: "Embedded Systems Development", href: "/courses/embedded-systems" },
];

const itDataCourses = [
  { title: "Machine Learning", href: "/courses/machine-learning" },
  { title: "Data Analytics", href: "/courses/data-analytics" },
  { title: "Data Science", href: "/courses/data-science" },
  { title: "Python Programming", href: "/courses/python" },
  { title: "Advanced Excel", href: "/courses/excel" },
  { title: "SQL", href: "/courses/sql" },
  { title: "Power BI", href: "/courses/power-bi" },
  { title: "Tableau", href: "/courses/tableau" },
];

const designCourses = [
  { title: "AutoCAD", href: "/courses/autocad" },
  { title: "Revit Architecture", href: "/courses/revit" },
  { title: "SolidWorks", href: "/courses/solidworks" },
  { title: "NX CAD", href: "/courses/nx-cad" },
  { title: "CATIA", href: "/courses/catia" },
  { title: "Creo (Pro/ENGINEER)", href: "/courses/creo" },
  { title: "3ds Max", href: "/courses/3ds-max" },
  { title: "Google SketchUp", href: "/courses/sketchup" },
  { title: "Electrical Design (EPLAN)", href: "/courses/electrical-design" },
];

const MegaMenu = () => {
  return (
    <div className="w-[900px] bg-card rounded-lg shadow-xl border p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Automation Column */}
        <div>
          <h3 className="font-heading font-bold text-primary mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            AUTOMATION
          </h3>
          <ul className="space-y-2">
            {automationCourses.map((course) => (
              <li key={course.title}>
                <Link
                  to={course.href}
                  className="text-sm text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-200 block"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* IT & Data Column */}
        <div>
          <h3 className="font-heading font-bold text-secondary mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-secondary rounded-full"></span>
            IT & DATA
          </h3>
          <ul className="space-y-2">
            {itDataCourses.map((course) => (
              <li key={course.title}>
                <Link
                  to={course.href}
                  className="text-sm text-muted-foreground hover:text-secondary hover:pl-2 transition-all duration-200 block"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Design Column */}
        <div>
          <h3 className="font-heading font-bold text-accent mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full"></span>
            DESIGNING
          </h3>
          <ul className="space-y-2">
            {designCourses.map((course) => (
              <li key={course.title}>
                <Link
                  to={course.href}
                  className="text-sm text-muted-foreground hover:text-accent hover:pl-2 transition-all duration-200 block"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-6 pt-6 border-t flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Can't find what you're looking for? Browse all our programs.
        </p>
        <Button variant="default" asChild>
          <Link to="/courses" className="flex items-center gap-2">
            View All Courses <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MegaMenu;
