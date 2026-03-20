"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ProjectData } from "../lib/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectHero({ project }: { project: ProjectData }) {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-line", { scaleX: 0, transformOrigin: "left", duration: 1.5 })
      .from(".hero-title-part", { y: 80, opacity: 0, duration: 1.2, stagger: 0.1, rotationZ: 1 }, "-=1.0")
      .from(".spec-grid-item", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[70vh] bg-[var(--background)] flex flex-col justify-end pt-32 pb-16 px-6 overflow-hidden">
      
      {/* Back Button */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20">
        <Link href="/#projects" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--foreground)]/60 hover:text-[var(--accent)] transition-colors">
          <ArrowLeft size={14} /> Back to Hub
        </Link>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        <h1 className="flex flex-col gap-2 overflow-hidden">
          <span className="hero-title-part font-serif italic text-6xl md:text-[7rem] lg:text-[9rem] text-[var(--accent)] leading-[0.85] tracking-tight">
            {project.title}
          </span>
        </h1>

        <div className="hero-line w-full h-[2px] bg-[var(--foreground)]" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-4">
          <div className="spec-grid-item flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-widest text-[var(--foreground)]/50 uppercase">Role</div>
            <div className="font-sans font-bold text-lg md:text-xl text-[var(--foreground)] leading-tight">{project.meta.role}</div>
          </div>
          <div className="spec-grid-item flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-widest text-[var(--foreground)]/50 uppercase">Timeline</div>
            <div className="font-sans font-bold text-lg md:text-xl text-[var(--foreground)] leading-tight">{project.meta.timeline}</div>
          </div>
          <div className="spec-grid-item flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-widest text-[var(--foreground)]/50 uppercase">Context</div>
            <div className="font-sans font-bold text-lg md:text-xl text-[var(--foreground)] leading-tight">{project.meta.context}</div>
          </div>
          <div className="spec-grid-item flex flex-col gap-2">
            <div className="font-mono text-[10px] tracking-widest text-[var(--foreground)]/50 uppercase">Status</div>
            <div className="font-sans font-bold text-lg md:text-xl text-[var(--foreground)] leading-tight text-[var(--accent)]">{project.meta.status}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
