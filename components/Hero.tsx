"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-text-part", {
      y: 60,
      opacity: 0,
      duration: 1.4,
      stagger: 0.1,
      delay: 0.2
    }).from(".hero-cta", {
      y: 20,
      opacity: 0,
      duration: 1,
    }, "-=0.8");
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative w-full h-[100dvh] flex flex-col justify-end bg-[var(--foreground)] overflow-hidden"
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero_bg.png" 
          alt="Brutalist Concrete Background" 
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)] via-[var(--foreground)]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-32 flex flex-col items-start gap-6">
        <h1 className="flex flex-col">
          <span className="hero-text-part font-sans font-bold text-3xl md:text-5xl lg:text-5xl text-[var(--primary)] tracking-tight uppercase max-w-4xl leading-tight">
            Abdur Rahman — Translating frontier AI into
          </span>
          <span className="hero-text-part font-serif italic text-6xl md:text-[7rem] lg:text-[8rem] text-[var(--accent)] leading-[0.85] mt-2 pb-2">
            Sophisticated software systems.
          </span>
        </h1>
        
        <div className="hero-cta mt-8 flex px-2">
          <div className="font-mono text-[var(--primary)]/70 text-sm flex items-center gap-4 border border-[var(--primary)]/20 px-6 py-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            System Operational // GenAI Protocol Active
          </div>
        </div>
      </div>
    </section>
  );
}
