import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export const LandingHero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Centered Main Name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 z-10">
        <div className="relative text-center">
          <div className="flex flex-col items-center gap-2">
            <BlurText
              text="IRFAN"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-black text-[95px] sm:text-[145px] md:text-[195px] lg:text-[245px] xl:text-[280px] leading-[0.85] tracking-[ -0.02em] uppercase justify-center whitespace-nowrap"
              style={{ color: "#C3E41D", fontFamily: "'Anton', sans-serif" }}
            />
            <BlurText
              text="SALIM"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-black text-[95px] sm:text-[145px] md:text-[195px] lg:text-[245px] xl:text-[280px] leading-[0.85] tracking-[ -0.06em] uppercase justify-center whitespace-nowrap"
              style={{ color: "#C3E41D", fontFamily: "'Anton', sans-serif" }}
            />
          </div>

          {/* Profile Picture Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[85px] h-[135px] sm:w-[125px] sm:h-[195px] md:w-[160px] md:h-[250px] lg:w-[190px] lg:h-[300px] rounded-full overflow-hidden shadow-2xl border-2 border-[#C3E41D]/20 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-500"
            >
              <img
                src="/src/assets/profile/irfan-hero.png"
                alt="Irfan Salim"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 w-full px-6 z-10">
        <div className="flex justify-center">
          <BlurText
            text="Transforming data into business intelligence."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center text-zinc-500 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "sans-serif" }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-6 h-6 text-[#C3E41D]" />
      </div>
    </section>
  );
};