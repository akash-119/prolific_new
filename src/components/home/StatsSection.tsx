import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, GraduationCap, Briefcase, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: MapPin,
    value: 30,
    suffix: "+",
    label: "Branches",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GraduationCap,
    value: 120000,
    suffix: "+",
    label: "Students Trained",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Briefcase,
    value: 600,
    suffix: "+",
    label: "Corporate Partners",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Trophy,
    value: 27,
    suffix: " Years",
    label: "of Excellence",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
];

const formatNumber = (num: number): string => {
  if (num >= 100000) {
    return "1,20,000";
  }
  return num.toLocaleString("en-IN");
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          // Animate stats cards
          countersRef.current.forEach((card, index) => {
            if (!card) return;

            // Card entrance animation
            gsap.fromTo(
              card,
              { opacity: 0, y: 60, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay: index * 0.15,
                ease: "back.out(1.7)",
              }
            );

            // Counter animation
            const countEl = card.querySelector(".stat-count");
            if (countEl) {
              const target = stats[index].value;
              gsap.to(
                { val: 0 },
                {
                  val: target,
                  duration: 2,
                  delay: index * 0.15 + 0.3,
                  ease: "power2.out",
                  onUpdate: function () {
                    countEl.textContent = formatNumber(Math.floor(this.targets()[0].val));
                  },
                }
              );
            }

            // Icon bounce animation
            const iconEl = card.querySelector(".stat-icon");
            if (iconEl) {
              gsap.fromTo(
                iconEl,
                { scale: 0, rotation: -180 },
                {
                  scale: 1,
                  rotation: 0,
                  duration: 0.8,
                  delay: index * 0.15 + 0.2,
                  ease: "elastic.out(1, 0.5)",
                }
              );
            }
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(el) => (countersRef.current[index] = el)}
              className="text-center opacity-0"
            >
              <div className={`stat-icon inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-heading font-bold ${stat.color} mb-2`}>
                <span className="stat-count">0</span>{stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
