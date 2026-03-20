"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectData } from "../lib/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectNarrative({ project }: { project: ProjectData }) {
  const container = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Simple, elegant fade up on scroll without forced pinning
    gsap.from(".narrative-block", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full flex flex-col">
      
      {/* Problem Node */}
      <div className="w-full bg-[var(--foreground)] text-[var(--background)] py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 narrative-block">
          <div className="font-mono text-xs tracking-widest text-[var(--accent)] font-bold uppercase">Constraint Identified //</div>
          <h2 className="font-sans font-bold text-3xl md:text-5xl leading-[1.2] tracking-tight">
            {project.problemStatement}
          </h2>
        </div>
      </div>

      {/* Solution Node */}
      <div className="w-full bg-[var(--background)] text-[var(--foreground)] py-32 md:py-48 px-6 border-b border-[var(--foreground)]/10">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 narrative-block">
          <div className="font-mono text-xs tracking-widest text-[var(--accent)] font-bold uppercase">Diagnostic Resolved // Architecture</div>
          <h2 className="font-sans font-bold text-3xl md:text-5xl leading-[1.2] tracking-tight">
            {project.solutionArchitecture}
          </h2>
        </div>
      </div>

    </section>
  );
}
