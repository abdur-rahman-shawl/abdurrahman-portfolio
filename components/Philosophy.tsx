"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const lines = gsap.utils.toArray<HTMLElement>(".manifesto-line");
    
    lines.forEach((line) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        rotationZ: 1,
        duration: 1.2,
        ease: "power4.out"
      });
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      id="philosophy" 
      className="relative w-full py-32 md:py-48 bg-[var(--foreground)] text-[var(--background)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1590608519782-eeb66b595fa2?q=80&w=2500&auto=format&fit=crop" 
          alt="Raw precision concrete" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--foreground)] via-transparent to-[var(--foreground)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-24 md:gap-32">
        <p className="manifesto-line font-mono text-xs md:text-sm tracking-[0.3em] text-[var(--accent)] uppercase font-bold">
           /// Core Directive
        </p>

        <h2 className="flex flex-col gap-4 md:gap-6">
          <span className="manifesto-line font-sans font-bold text-4xl md:text-7xl uppercase tracking-tighter leading-none">
            We don't just prompt models.
          </span>
          <span className="manifesto-line font-serif italic text-5xl md:text-[6rem] lg:text-[7rem] text-[var(--primary)] leading-[0.85]">
            We architect cognitive engines.
          </span>
        </h2>
        
        <div className="manifesto-line h-px w-full bg-[var(--primary)]/20" />

        <h2 className="flex flex-col gap-4 md:gap-6 items-end text-right">
           <span className="manifesto-line font-sans font-bold text-4xl md:text-7xl uppercase tracking-tighter leading-none text-[var(--accent)]">
            Stop building toys.
           </span>
           <span className="manifesto-line font-serif italic text-5xl md:text-[6rem] lg:text-[7rem] text-[var(--primary)] leading-[0.85]">
             Deploy resilient systems.
           </span>
        </h2>
      </div>
    </section>
  );
}
