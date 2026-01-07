// import { motion } from "framer-motion";
// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// const courses = [
//   "PLC SCADA Training",
//   "Industrial Automation",
//   "Machine Learning",
//   "Data Analytics",
//   "Data Science",
//   "SolidWorks",
//   "AutoCAD",
//   "Embedded Systems",
//   "Other",
// ];

// const Contact = () => {
//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="bg-primary py-16">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
//           >
//             Contact Us
//           </motion.h1>
//           <p className="text-primary-foreground/80 text-lg">
//             Get in touch with our career counselors for course details and enrollment
//           </p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-card p-8 rounded-xl shadow-lg"
//             >
//               <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
//                 Send us a Message
//               </h2>
//               <form className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
//                     <Input placeholder="Your Name" />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
//                     <Input type="email" placeholder="your@email.com" />
//                   </div>
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-foreground mb-2 block">Phone *</label>
//                     <Input placeholder="+91 XXXXX XXXXX" />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium text-foreground mb-2 block">City</label>
//                     <Input placeholder="Your City" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-2 block">Course Interested</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a course" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {courses.map((course) => (
//                         <SelectItem key={course} value={course.toLowerCase().replace(/\s+/g, "-")}>
//                           {course}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
//                   <Textarea placeholder="Your message or query..." rows={4} />
//                 </div>
//                 <Button variant="default" size="lg" className="w-full">
//                   Send Message
//                 </Button>
//               </form>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
//                 Get in Touch
//               </h2>

//               <div className="space-y-6 mb-8">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
//                     <MapPin className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground">Our Address</h3>
//                     <p className="text-muted-foreground">
//                       B-8, B Block, Sector 2, Noida,<br />
//                       Uttar Pradesh 201301
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
//                     <Phone className="h-6 w-6 text-secondary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground">Phone</h3>
//                     <a href="tel:+919891740056" className="text-muted-foreground hover:text-primary">
//                       +91-9891740056
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
//                     <Mail className="h-6 w-6 text-accent" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground">Email</h3>
//                     <a href="mailto:enquiry@prolificautomation.in" className="text-muted-foreground hover:text-primary">
//                       enquiry@prolificautomation.in
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
//                     <Clock className="h-6 w-6 text-gold" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground">Office Hours</h3>
//                     <p className="text-muted-foreground">
//                       Mon - Sat: 9:00 AM - 7:00 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="rounded-xl overflow-hidden shadow-lg">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7160887654567!2d77.3109!3d28.5858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzA4LjkiTiA3N8KwMTgnMzkuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="300"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const courses = [
  "PLC SCADA Training",
  "Industrial Automation",
  "Machine Learning",
  "Data Analytics",
  "Data Science",
  "SolidWorks",
  "AutoCAD",
  "Embedded Systems",
  "Other",
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      course: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result.text);
      alert("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

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
            Contact Us
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg">
            Get in touch with our career counselors for course details and
            enrollment
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone *
                    </label>
                    <Input
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      City
                    </label>
                    <Input
                      name="city"
                      placeholder="Your City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Course Interested
                  </label>
                  <Select
                    name="course"
                    value={formData.course}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* Hidden input for EmailJS */}
                  <input type="hidden" name="course" value={formData.course} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Your message or query..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Our Address
                    </h3>
                    <p className="text-muted-foreground">
                      B-8, B Block, Sector 2, Noida,
                      <br />
                      Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:+919891740056"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +91-9891740056
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:enquiry@prolificautomation.in"
                      className="text-muted-foreground hover:text-primary"
                    >
                      enquiry@prolificautomation.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Office Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7160887654567!2d77.3109!3d28.5858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzA4LjkiTiA3N8KwMTgnMzkuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.6291104032127!2d77.31298610047841!3d28.58495947793678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ff00000001%3A0x1a6e9f5d61d140b6!2sProlific%20Automation%20Noida%20%7C%20PLC%20SCADA%20AUTOMATION%20TRAINING%20IN%20NOIDA!5e0!3m2!1sen!2sin!4v1767782288245!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
