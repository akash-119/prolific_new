import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAutomation from "@/assets/hero-automation-lab.jpg";
import heroStudents from "@/assets/hero-students-plc.jpg";
import heroIndustry from "@/assets/hero-industry-4.jpg";
import heroCenter from "@/assets/hero-training-center.jpg";

const slides = [
  {
    id: 1,
    image: heroAutomation,
    heading: "Pioneer in Industrial Automation Training Since 1997",
    subheading: "Transform Your Career with Industry-Leading Certification Programs",
    stats: "30+ Branches | 1.2 Lakh+ Students Trained | 600+ Corporate Partners",
    primaryCTA: { label: "Explore Courses", href: "/courses" },
    secondaryCTA: { label: "Talk to Counselor", href: "/contact" },
  },
  {
    id: 2,
    image: heroStudents,
    heading: "100% Placement-Oriented Training Programs",
    subheading: "ISO 9001-2008 Certified | NSDC Approved | IAO Certified",
    stats: "",
    primaryCTA: { label: "View Placement Records", href: "/placements" },
    secondaryCTA: { label: "Download Brochure", href: "#" },
  },
  {
    id: 3,
    image: heroIndustry,
    heading: "Learn from Industry Experts",
    subheading: "Hands-on Training with Latest Industrial Equipment",
    stats: "",
    primaryCTA: { label: "View Courses", href: "/courses" },
    secondaryCTA: { label: "Book Free Demo", href: "/contact" },
  },
  {
    id: 4,
    image: heroCenter,
    heading: "Join 1.2 Lakh+ Successful Professionals",
    subheading: "Trained 50+ Fortune 1000 Companies",
    stats: "",
    primaryCTA: { label: "Success Stories", href: "/placements" },
    secondaryCTA: { label: "Enroll Now", href: "/contact" },
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // GSAP animations on slide change
  useEffect(() => {
    if (!contentRef.current || !bgRef.current) return;

    const tl = gsap.timeline();

    // Background zoom animation
    tl.fromTo(
      bgRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      0
    );

    // Heading animation
    const heading = contentRef.current.querySelector("h1");
    if (heading) {
      tl.fromTo(
        heading,
        { y: 80, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { 
          y: 0, 
          opacity: 1, 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.8, 
          ease: "power4.out" 
        },
        0.2
      );
    }

    // Subheading animation
    const subheading = contentRef.current.querySelector(".subheading");
    if (subheading) {
      tl.fromTo(
        subheading,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        0.4
      );
    }

    // Stats animation
    const stats = contentRef.current.querySelector(".stats-bar");
    if (stats) {
      tl.fromTo(
        stats,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.2)" },
        0.6
      );
    }

    // CTA buttons animation
    const buttons = contentRef.current.querySelectorAll(".cta-btn");
    buttons.forEach((btn, index) => {
      tl.fromTo(
        btn,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        0.7 + index * 0.1
      );
    });

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div ref={contentRef} className="max-w-3xl text-card">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
            {slides[currentSlide].heading}
          </h1>
          <p className="subheading text-lg md:text-xl text-card/90 mb-6">
            {slides[currentSlide].subheading}
          </p>
          {slides[currentSlide].stats && (
            <div className="stats-bar bg-card/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-8 inline-block">
              <p className="text-sm md:text-base font-medium">
                {slides[currentSlide].stats}
              </p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild className="cta-btn hover:scale-105 transition-transform">
              <Link to={slides[currentSlide].primaryCTA.href}>
                {slides[currentSlide].primaryCTA.label}
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="cta-btn hover:scale-105 transition-transform">
              <Link to={slides[currentSlide].secondaryCTA.href}>
                {slides[currentSlide].secondaryCTA.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm text-card flex items-center justify-center hover:bg-card/40 hover:scale-110 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm text-card flex items-center justify-center hover:bg-card/40 hover:scale-110 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-card/50 w-3 hover:bg-card/80"
            }`}
          />
        ))}
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-card/20">
        <div
          className="h-full bg-secondary transition-all duration-300 ease-linear"
          style={{
            width: isPaused ? `${((currentSlide + 1) / slides.length) * 100}%` : `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: isPaused ? "none" : "progress 5s linear infinite",
          }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
