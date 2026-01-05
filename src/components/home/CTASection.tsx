import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "100% Placement Assistance",
  "Industry Expert Trainers",
  "Hands-on Practical Training",
  "Flexible Batch Timings",
];

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Subheading animation
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Benefits stagger animation
      benefitsRef.current.forEach((benefit, index) => {
        if (!benefit) return;
        gsap.fromTo(
          benefit,
          { opacity: 0, x: -30, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.3 + index * 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      });

      // CTA buttons animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Background circles animation
      gsap.to(".bg-circle-1", {
        x: 30,
        y: -30,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".bg-circle-2", {
        x: -40,
        y: 40,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-cta relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-circle-1 absolute top-0 left-0 w-64 h-64 bg-card rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="bg-circle-2 absolute bottom-0 right-0 w-96 h-96 bg-card rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-5xl font-heading font-bold text-card mb-4"
          >
            Ready to Transform Your Career?
          </h2>
          <p 
            ref={subheadingRef}
            className="text-xl text-card/90 mb-8"
          >
            Join India's Leading Industrial Automation Training Institute
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit} 
                ref={(el) => (benefitsRef.current[index] = el)}
                className="flex items-center gap-2 text-card hover:scale-105 transition-transform cursor-default"
              >
                <Check className="h-5 w-5 text-secondary" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild className="group hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                Enroll Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="hover:scale-105 transition-transform">
              <a href="tel:+919891740056" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Talk to Career Counselor
              </a>
            </Button>
          </div>

          <p className="mt-6 text-card/80">
            Call us: <a href="tel:+919891740056" className="font-semibold text-card hover:underline">+91-9891740056</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
