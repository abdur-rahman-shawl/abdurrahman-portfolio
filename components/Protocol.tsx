"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { projectsData } from "../lib/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Protocol() {
  const container = useRef<HTMLElement>(null);
  const projects = projectsData;

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    
    // Pinning section
    cards.forEach((card, index) => {
      // Scale down previous cards when new one comes in
      if (index < cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: container.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        gsap.to(card, {
          scale: 0.92,
          filter: "blur(12px)",
          opacity: 0.2,
          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      }
    });

    // Decorative repeating sub-animations
    gsap.to(".anim-rotate", {
      rotation: 360,
      duration: 30,
      ease: "linear",
      repeat: -1,
      transformOrigin: "center"
    });

    gsap.to(".anim-scan", {
      y: 190,
      yoyo: true,
      repeat: -1,
      duration: 2.5,
      ease: "power2.inOut"
    });

    gsap.to(".anim-wave rect", {
      scaleY: "random(0.1, 1)",
      transformOrigin: "bottom",
      stagger: 0.05,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

  }, { scope: container });

  return (
    <section ref={container} id="protocol" className="relative w-full bg-[var(--background)]">
      {projects.map((proj, idx) => (
        <div 
          key={idx} 
          className="project-card relative w-full h-screen flex flex-col md:flex-row items-center border-t border-[var(--foreground)]/10"
          style={{ 
             backgroundColor: idx % 2 === 0 ? "var(--background)" : "var(--primary)",
             zIndex: idx 
          }}
        >
          {/* Content Half */}
          <div className="w-full md:w-[55%] p-10 md:p-32 flex flex-col justify-center h-[50vh] md:h-full">
            <div className="font-mono text-sm tracking-widest text-[var(--accent)] mb-4 md:mb-6 uppercase font-bold">
              Project _ 0{idx + 1}
            </div>
            <h3 className="font-sans font-bold text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter text-[var(--foreground)] leading-[0.9] mb-6 md:mb-8 max-w-2xl">
              {proj.title}
            </h3>
            <p className="font-mono text-sm md:text-base lg:text-lg opacity-70 leading-relaxed max-w-xl text-[var(--foreground)] mb-8">
              {proj.problemStatement.substring(0, 150)}...
            </p>
            <Link 
               href={`/projects/${proj.slug}`}
               className="font-mono text-xs uppercase tracking-widest border border-[var(--foreground)]/20 px-6 py-3 rounded-full w-max hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors mt-auto md:mt-0"
            >
               View Capabilities
            </Link>
          </div>

          {/* Graphics Half */}
          <div className="w-full md:w-[45%] h-[50vh] md:h-full flex items-center justify-center border-l-0 md:border-l border-[var(--foreground)]/10 relative overflow-hidden bg-[var(--foreground)] text-[var(--primary)] px-6">
            <div className="font-mono text-[10px] tracking-widest absolute top-8 right-8 opacity-40 uppercase">
              VISUAL REPRESNTATION
            </div>

            {proj.animType === "rotate" && (
              <svg viewBox="0 0 100 100" className="anim-rotate w-48 h-48 md:w-80 md:h-80 opacity-60">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            )}

            {proj.animType === "scan" && (
              <div className="relative w-48 h-48 md:w-80 md:h-80 border border-current opacity-60 flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
                  {Array.from({length: 100}).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-current"></div>
                  ))}
                </div>
                <div className="anim-scan w-full h-[3px] bg-[var(--accent)] absolute top-0 shadow-[0_0_20px_var(--accent)] z-10" />
                <div className="font-mono text-[10px] opacity-70">DATA PIPELINE ACTIVE</div>
              </div>
            )}

            {proj.animType === "wave" && (
              <svg viewBox="0 0 100 50" className="anim-wave w-48 h-24 md:w-80 md:h-40 opacity-80 mt-10">
                {Array.from({length: 40}).map((_, i) => (
                  <rect key={i} x={i * 2.5} y="0" width="1.5" height="50" fill="currentColor" />
                ))}
              </svg>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
