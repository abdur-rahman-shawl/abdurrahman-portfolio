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

    // Mapped Custom Bespoke GSAP Data Timelines
    
    gsap.to(".anim-vector-node", {
      x: () => gsap.utils.random(-30, 30),
      y: () => gsap.utils.random(-30, 30),
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
      stagger: 0.05
    });

    gsap.to(".anim-neural-pulse", {
      scale: 2,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: "power2.out",
      stagger: 0.5
    });

    gsap.to(".anim-decision-path", {
      strokeDashoffset: 0,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2
    });
    gsap.to(".anim-decision-node", {
      opacity: 1,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.3,
      stagger: 0.2
    });

    gsap.to(".anim-graph-trace", {
      strokeDashoffset: -100,
      duration: 3,
      repeat: -1,
      ease: "linear"
    });

    gsap.fromTo(".anim-data-block", 
      { y: -30, opacity: 0 },
      { y: 30, opacity: 1, duration: 1.2, repeat: -1, stagger: 0.15, ease: "none" }
    );

    gsap.to(".anim-push-ring", {
      scale: 2.2,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power2.out",
      stagger: 0.4
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

            {proj.animType === "vector-cluster" && (
              <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-80 md:h-80 opacity-60 overflow-visible">
                {Array.from({length: 30}).map((_, i) => (
                  <circle key={i} className="anim-vector-node" cx="50" cy="50" r="1.5" fill="currentColor" />
                ))}
                <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M50 0 L50 100 M0 50 L100 50" stroke="var(--accent)" strokeWidth="0.2" opacity="0.5" />
              </svg>
            )}

            {proj.animType === "neural-pulse" && (
              <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center opacity-80">
                <div className="anim-neural-pulse absolute w-20 h-20 rounded-full border border-[var(--accent)]" />
                <div className="anim-neural-pulse absolute w-20 h-20 rounded-full border border-[var(--accent)] -animation-delay-1000" />
                <div className="w-6 h-6 rounded-full bg-current z-10" />
                {Array.from({length: 6}).map((_, i) => (
                  <div key={i} className="absolute w-2 h-2 rounded-full bg-[var(--foreground)] opacity-50" style={{ transform: `rotate(${i * 60}deg) translateY(-50px)` }} />
                ))}
              </div>
            )}

            {proj.animType === "decision-tree" && (
              <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-80 md:h-80 opacity-80 overflow-visible">
                <path className="anim-decision-path" d="M 50 20 L 20 60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="60" strokeDashoffset="60" />
                <path className="anim-decision-path" d="M 50 20 L 50 80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="60" strokeDashoffset="60" />
                <path className="anim-decision-path" d="M 50 20 L 80 60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="60" strokeDashoffset="60" />
                <rect x="42" y="12" width="16" height="16" fill="currentColor" />
                <circle className="anim-decision-node opacity-0" cx="20" cy="60" r="4.5" fill="var(--accent)" />
                <circle className="anim-decision-node opacity-0" cx="50" cy="80" r="4.5" fill="var(--accent)" />
                <circle className="anim-decision-node opacity-0" cx="80" cy="60" r="4.5" fill="var(--accent)" />
              </svg>
            )}

            {proj.animType === "graph-network" && (
              <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-80 md:h-80 opacity-60">
                <path d="M10 20 L40 40 L80 15 L60 60 L90 85 L50 90 L20 70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <path d="M40 40 L60 60 L20 70 L40 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <path className="anim-graph-trace" d="M10 20 L40 40 L80 15 L60 60 L90 85 L50 90 L20 70 Z" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="20 100" />
                <circle cx="40" cy="40" r="3" fill="currentColor" />
                <circle cx="60" cy="60" r="3" fill="currentColor" />
              </svg>
            )}

            {proj.animType === "data-funnel" && (
              <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-80 md:h-80 opacity-80 overflow-hidden">
                <path d="M35 0 L35 100 M65 0 L65 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
                {Array.from({length: 5}).map((_, i) => (
                  <rect key={i} className="anim-data-block" x="40" y="0" width="20" height="6" fill="var(--accent)" />
                ))}
              </svg>
            )}

            {proj.animType === "push-ripple" && (
              <div className="relative w-24 h-48 md:w-36 md:h-72 border-2 border-current rounded-2xl opacity-80 flex items-center justify-center">
                 <div className="anim-push-ring absolute w-full h-full rounded-2xl border-2 border-[var(--accent)]" />
                 <div className="anim-push-ring absolute w-full h-full rounded-2xl border-2 border-[var(--accent)]" style={{animationDelay: "-0.7s"}} />
                 <div className="w-8 h-1 bg-current rounded-full absolute top-4 opacity-50" />
                 <div className="w-4 h-4 rounded-full bg-[var(--accent)] opacity-50 absolute bottom-6" />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
