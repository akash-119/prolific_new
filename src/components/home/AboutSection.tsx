import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Award, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroCenter from "@/assets/hero-training-center.jpg";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  "Pioneer in industrial automation training since 1997",
  "Trained over 10,500 students/professionals annually",
  "500+ in-plant training programs executed",
  "Partnered with 50+ Fortune 1000 companies",
  "30 branches across India",
  "Complete solution for Industrial Automation, Mechanical, Embedded Systems, and Electrical training",
  "ISO 9001-2008 certified, IAO Certified, NSDC Approved",
  "Executing UDAAN Program (MHA & NSDC sponsored)",
  "Strong placement network with 120+ colleges",
  "State-of-the-art training labs with latest equipment",
  "Industry expert trainers with 10+ years experience",
];

const badges = [
  { icon: Award, label: "ISO Certified" },
  { icon: Building, label: "NSDC Approved" },
  { icon: Users, label: "Since 1997" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const highlightsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Content header animation
      const header = contentRef.current?.querySelector("h2");
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 50, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Highlights stagger animation
      highlightsRef.current.forEach((highlight, index) => {
        if (!highlight) return;
        gsap.fromTo(
          highlight,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 70%",
            },
          }
        );
      });

      // Floating badges animation
      badgesRef.current.forEach((badge, index) => {
        if (!badge) return;
        gsap.fromTo(
          badge,
          { opacity: 0, y: 50, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 0.5 + index * 0.15,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "bottom 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={heroCenter}
                alt="Prolific Training Center"
                className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Badges */}
            <div className="absolute -bottom-6 left-4 right-4 flex justify-center gap-3">
              {badges.map((badge, index) => (
                <div
                  key={badge.label}
                  ref={(el) => (badgesRef.current[index] = el)}
                  className="bg-card px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer"
                >
                  <badge.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              About Prolific Systems & Technologies
            </h2>
            <p className="text-lg text-primary font-medium mb-6">
              Leading Industrial Automation Training Institute in India
            </p>

            <div className="grid gap-3 mb-8">
              {highlights.slice(0, 8).map((highlight, index) => (
                <div
                  key={index}
                  ref={(el) => (highlightsRef.current[index] = el)}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <div className="shrink-0 mt-1 group-hover:scale-125 transition-transform">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{highlight}</p>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild className="hover:scale-105 transition-transform">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
