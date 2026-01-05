import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Pratham Arora",
    position: "Automation Engineer",
    company: "Siemens",
    course: "PLC SCADA Training",
    rating: 5,
    text: "The hands-on PLC training at Prolific helped me land my dream job at Siemens. The trainers have real industry experience that made all the difference.",
  },
  {
    id: 2,
    name: "Harsh Dubey",
    position: "Control Systems Engineer",
    company: "ABB",
    course: "Industrial Automation",
    rating: 5,
    text: "Best industrial automation training in Delhi NCR. The practical labs and industry connections are unmatched. Highly recommend for aspiring automation engineers.",
  },
  {
    id: 3,
    name: "Mohit Gupta",
    position: "Data Analyst",
    company: "Infosys",
    course: "Data Analytics",
    rating: 5,
    text: "Excellent placement support and industry connections. The Power BI and SQL training was exactly what I needed to transition into data analytics.",
  },
  {
    id: 4,
    name: "Amit Rai",
    position: "Design Engineer",
    company: "L&T",
    course: "SolidWorks",
    rating: 5,
    text: "Trainers have real industry experience. The mechanical design training prepared me well for my role at L&T. Great infrastructure and support.",
  },
  {
    id: 5,
    name: "Ritik Sharma",
    position: "Embedded Developer",
    company: "Bosch",
    course: "Embedded Systems",
    rating: 5,
    text: "State-of-the-art lab facilities with the latest hardware. The embedded systems course gave me the skills I needed to work with cutting-edge technology.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const itemsPerView = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards entrance animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: 10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.7,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const prev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  };

  // Animate on slide change
  useEffect(() => {
    gsap.to(".testimonials-track", {
      x: `-${currentIndex * (100 / itemsPerView + 2)}%`,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentIndex, itemsPerView]);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from professionals who transformed their careers with our training programs
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="testimonials-track flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="min-w-full md:min-w-[calc(33.333%-1rem)] bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  style={{ perspective: "1000px" }}
                >
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-gold text-gold transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </p>
                      <span className="text-xs text-primary font-medium">{testimonial.course}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
