import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Wrench, Handshake, Monitor, Award, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Users,
    title: "Industry Expert Trainers",
    description: "Learn from professionals with 10+ years of industry experience and practical knowledge.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Wrench,
    title: "Hands-On Practical Training",
    description: "Real industrial equipment and live project exposure for practical skill development.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Handshake,
    title: "100% Placement Assistance",
    description: "Dedicated placement cell with 600+ hiring partners across industries.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Monitor,
    title: "State-of-the-Art Labs",
    description: "Latest automation equipment and industry-standard tools for training.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "ISO & NSDC approved certifications valid across industries worldwide.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Clock,
    title: "Flexible Batch Timings",
    description: "Weekend batches, weekday options, and online/offline modes available.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );

        // Icon animation
        const iconWrapper = card.querySelector(".icon-wrapper");
        if (iconWrapper) {
          gsap.fromTo(
            iconWrapper,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Prolific Automation?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by 600+ companies and 1.2 lakh+ students for excellence in technical training
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ perspective: "1000px" }}
            >
              <div className={`icon-wrapper inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
