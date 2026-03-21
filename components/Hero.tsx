"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";
import TopographicVFX from "./TopographicVFX";

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
        <TopographicVFX />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)] via-[var(--foreground)]/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-20 lg:pb-16 flex flex-col items-start gap-4 md:gap-6">
        <div className="hero-text-part font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] text-[var(--background)] uppercase font-bold opacity-80">
          Abdur Rahman //
        </div>
        <h1 className="hero-text-part font-serif italic text-5xl sm:text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tight text-[var(--background)] -mt-2 md:-mt-6">
          Software Engineer  
          <br />
          <span className="font-sans not-italic text-5xl sm:text-6xl md:text-[7rem] lg:text-[9rem] text-[var(--accent)] tracking-tighter uppercase font-bold block mt-2 md:mt-0">
            GenAI
          </span>
        </h1>
        <p className="hero-text-part font-mono text-[10px] sm:text-xs md:text-sm lg:text-base tracking-[0.2em] md:tracking-[0.4em] max-w-sm md:max-w-2xl text-[var(--background)]/80 uppercase mt-4">
          Translating frontier AI into sophisticated software systems.
        </p>
        
        <div className="hero-cta mt-8 flex px-2 flex-wrap gap-4">
          <div className="hero-text-part font-mono text-[var(--background)]/80 text-[10px] md:text-sm flex items-center gap-4 border border-[var(--background)]/20 px-6 py-3 rounded-full bg-[var(--foreground)]/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            System Operational // GenAI Protocol Active
          </div>
        </div>
      </div>
    </section>
  );
}
