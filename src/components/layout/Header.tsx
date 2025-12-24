import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/data/siteData";
import { useScrollPosition } from "@/hooks/useAnimation";
import logo from "@/assets/prolific-logo.webp";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses", hasDropdown: true },
  { name: "Certificate", path: "/certificate" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Office Gallery", path: "/gallery" },
  { name: "Placements", path: "/placements" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container-section flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919891740056" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              +91 9891740056
            </a>
            <a href="mailto:enquiry@prolificdelhi.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              enquiry@prolificdelhi.com
            </a>
          </div>
          <div className="text-primary-foreground/80">
            ISO 9001-2008 | IAO Certified | NSDC Approved
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-card"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-section">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Prolific Delhi" className="h-10 md:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`px-4 py-2 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary hover:bg-muted"
                      }`}
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <AnimatePresence>
                        {isCoursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-card rounded-xl shadow-hover border border-border p-6 min-w-[600px]"
                          >
                            <div className="grid grid-cols-3 gap-6">
                              {Object.entries(coursesData).map(([category, courses]) => (
                                <div key={category}>
                                  <h3 className="font-semibold text-primary mb-3">{category}</h3>
                                  <ul className="space-y-2">
                                    {courses.map((course) => (
                                      <li key={course.id}>
                                        <Link
                                          to={`/courses/${course.id}`}
                                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                        >
                                          {course.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="default" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container-section py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button variant="default" size="lg" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <a href="tel:+919891740056" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +91 9891740056
                  </a>
                  <a href="mailto:enquiry@prolificdelhi.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> enquiry@prolificdelhi.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
