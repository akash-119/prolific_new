import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/prolific-logo.webp";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Courses", href: "/courses" },
  { label: "Certificate Verification", href: "/verify" },
  { label: "About Us", href: "/about" },
  { label: "Placements", href: "/placements" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

const popularCourses = [
  { label: "PLC SCADA Training", href: "/courses/plc-scada" },
  { label: "Industrial Automation", href: "/courses/automation" },
  { label: "Machine Learning", href: "/courses/machine-learning" },
  { label: "Data Analytics", href: "/courses/data-analytics" },
  { label: "SolidWorks", href: "/courses/solidworks" },
  { label: "AutoCAD", href: "/courses/autocad" },
  { label: "Embedded Systems", href: "/courses/embedded" },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Prolific" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-card/70 text-sm mb-6">
              Pioneer in Industrial Automation Training Since 1997. Empowering professionals with cutting-edge technical skills for industry success.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-card/10 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-card/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              {popularCourses.map((course) => (
                <li key={course.label}>
                  <Link
                    to={course.href}
                    className="text-card/70 hover:text-secondary transition-colors text-sm"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-card/70">B-8, B Block, Sector 2, Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+919891740056" className="text-card/70 hover:text-secondary">+91-9891740056</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:enquiry@prolificautomation.in" className="text-card/70 hover:text-secondary">enquiry@prolificautomation.in</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-card/70">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-2">Get Updates</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-card/10 border-card/20 text-card placeholder:text-card/50"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-card/60">
          <p>© 2025 Prolific Systems & Technologies. All Rights Reserved.</p>
          <p>Pioneer in Industrial Automation Training Since 1997</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
