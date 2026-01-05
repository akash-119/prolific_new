import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "Siemens", "ABB", "Schneider", "Rockwell", "Bosch",
  "L&T", "BHEL", "Infosys", "TCS", "Wipro",
  "Honeywell", "Emerson", "GE", "Yokogawa", "Delta",
];

const CorporatePartners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Infinite scroll animation
      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth / 2;
        
        gsap.to(track, {
          x: -totalWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        });

        // Pause on hover
        track.addEventListener("mouseenter", () => {
          gsap.to(track, { timeScale: 0.2, duration: 0.5 });
        });
        track.addEventListener("mouseleave", () => {
          gsap.to(track, { timeScale: 1, duration: 0.5 });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Our Corporate Training Partners
          </h2>
          <p className="text-muted-foreground">
            Trusted by 600+ companies including 50+ Fortune 1000 organizations
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div ref={trackRef} className="flex">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-8 py-4 bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CorporatePartners;
