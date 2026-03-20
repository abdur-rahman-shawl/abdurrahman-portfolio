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
    // Problem -> Solution Pinning Logic
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=150%", // Scroll depth for the pin
      pin: true,
      animation: gsap.timeline()
        .to(".problem-section", { opacity: 0, y: -50, scale: 0.95, duration: 1 })
        .to(".bg-morph", { backgroundColor: "var(--background)", duration: 1 }, "<")
        .fromTo(".solution-section", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "<0.5"),
      scrub: true
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-morph relative w-full h-screen overflow-hidden bg-[var(--foreground)] flex flex-col justify-center">
      
      {/* Problem Node */}
      <div className="problem-section absolute inset-0 flex items-center justify-center p-6 text-[var(--background)]">
        <div className="max-w-4xl w-full flex flex-col gap-8">
          <div className="font-mono text-xs tracking-widest text-[var(--accent)] font-bold uppercase">Constraint Identified //</div>
          <h2 className="font-sans font-bold text-3xl md:text-5xl leading-[1.2] tracking-tight">
            {project.problemStatement}
          </h2>
        </div>
      </div>

      {/* Solution Node */}
      <div className="solution-section absolute inset-0 flex items-center justify-center p-6 text-[var(--foreground)] opacity-0">
        <div className="max-w-4xl w-full flex flex-col gap-8">
          <div className="font-mono text-xs tracking-widest text-[var(--accent)] font-bold uppercase">Diagnostic Resolved // Architecture</div>
          <h2 className="font-sans font-bold text-3xl md:text-5xl leading-[1.2] tracking-tight">
            {project.solutionArchitecture}
          </h2>
        </div>
      </div>

    </section>
  );
}
