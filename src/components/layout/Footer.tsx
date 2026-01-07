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
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6 bg-white/5 p-3 rounded-lg ">
              <img src={logo} alt="Prolific" className="h-12 w-auto" />
            </div>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              Prolific in Industrial Automation Training Since 2012. Empowering professionals with cutting-edge technical skills for industry success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary/70 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary/70 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary/70 transition-all duration-300 hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary/70 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary/70 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Popular Courses</h4>
            <ul className="space-y-3">
              {popularCourses.map((course) => (
                <li key={course.label}>
                  <Link
                    to={course.href}
                    className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-orange-400 shrink-0 mt-1" />
                <span className="text-white/70 text-sm">B-8, B Block, Sector 2, Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-orange-400 shrink-0" />
                <a href="tel:+919891740056" className="text-white/70 text-sm hover:text-white transition-colors">+91-9891740056</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-orange-400 shrink-0" />
                <a href="mailto:enquiry@prolificautomation.in" className="text-white/70 text-sm hover:text-white transition-colors">enquiry@prolificautomation.in</a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-orange-400 shrink-0" />
                <span className="text-white/70 text-sm">Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold text-sm mb-3 text-white">Get Updates</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
                />
                <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2025 Prolific Systems & Technologies. All Rights Reserved.</p>
          <p className="text-white/50">Prolific in Industrial Automation Training Since 1997</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
