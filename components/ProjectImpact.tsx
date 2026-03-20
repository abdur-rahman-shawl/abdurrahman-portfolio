"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ProjectData } from "../lib/projects";

export default function ProjectImpact({ project }: { project: ProjectData }) {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Reveal impact metrics
    gsap.from(".impact-item", {
      scrollTrigger: {
        trigger: ".impact-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // Infinite Marquee
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });

  }, { scope: container });

  const techString = project.techStack.join(" /// ") + " /// " + project.techStack.join(" /// ") + " /// ";

  return (
    <section ref={container} className="relative w-full bg-[var(--background)] py-32 overflow-hidden border-t border-[var(--foreground)]/10">
      
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="font-mono text-xs tracking-widest text-[var(--accent)] mb-12 uppercase font-bold">Metrics & Output</div>
        <div className="impact-grid grid grid-cols-1 md:grid-cols-3 gap-16">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx} className="impact-item flex flex-col gap-2">
               <div className="font-serif italic text-7xl md:text-8xl text-[var(--accent)] tracking-tighter leading-none hover:text-[var(--foreground)] transition-colors">
                 {metric.value}
               </div>
               <div className="font-sans font-bold text-xl uppercase tracking-tight text-[var(--foreground)] mt-4">
                 {metric.label}
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full flex whitespace-nowrap overflow-hidden border-y border-[var(--foreground)]/10 py-6 bg-[var(--primary)] text-[var(--foreground)] opacity-70">
         <div className="marquee-inner flex font-mono text-2xl uppercase tracking-widest font-bold items-center">
            <span>{techString}</span>
            <span>{techString}</span>
         </div>
      </div>

    </section>
  );
}
