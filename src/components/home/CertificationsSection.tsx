import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: "ISO 9001-2008", abbr: "ISO" },
  { name: "NSDC Approved", abbr: "NSDC" },
  { name: "IAO Certified", abbr: "IAO" },
  { name: "UDAAN Partner", abbr: "UDAAN" },
  { name: "Aref Group", abbr: "AREF" },
  { name: "Govt. Recognized", abbr: "GOVT" },
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards stagger animation with bounce
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.5, rotateY: 90 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );

        // Icon pop animation
        const icon = card.querySelector(".cert-icon");
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Our Certifications & Accreditations
          </h2>
          <p className="text-muted-foreground">
            Trusted certifications that validate our training excellence
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-card px-6 py-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ perspective: "1000px" }}
            >
              <div className="cert-icon w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-primary font-bold text-sm">{cert.abbr}</span>
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
