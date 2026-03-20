"use client";

import Link from "next/link";
import { ProjectData, getProjectBySlug } from "../lib/projects";

export default function ProjectNav({ project }: { project: ProjectData }) {
  const nextProject = project.nextProjectSlug ? getProjectBySlug(project.nextProjectSlug) : null;
  const prevProject = project.prevProjectSlug ? getProjectBySlug(project.prevProjectSlug) : null;

  return (
    <section className="w-full bg-[var(--foreground)] text-[var(--background)] py-20 px-6 border-t border-[var(--primary)]/10 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col gap-2 relative w-full md:w-1/2 text-left hover:scale-[1.02] transition-transform duration-500">
            <div className="font-mono text-[10px] tracking-widest text-[var(--accent)] uppercase">
               /// Previous Node
            </div>
            <div className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-tighter text-[var(--primary)] group-hover:text-[var(--background)] transition-colors">
              {prevProject.title}
            </div>
          </Link>
        ) : (
          <div className="w-full md:w-1/2" />
        )}

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col gap-2 relative w-full md:w-1/2 md:text-right hover:scale-[1.02] transition-transform duration-500 items-end">
            <div className="font-mono text-[10px] tracking-widest text-[var(--accent)] uppercase">
               Next Node ///
            </div>
            <div className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-[var(--primary)] group-hover:text-[var(--background)] transition-colors">
              {nextProject.title}
            </div>
          </Link>
        ) : (
          <div className="w-full md:w-1/2 md:text-right flex flex-col gap-2 items-end">
            <div className="font-mono text-[10px] tracking-widest text-[var(--accent)] uppercase">
               End of Transmission ///
            </div>
            <Link href="/#projects" className="font-sans font-bold text-3xl uppercase tracking-tighter text-[var(--primary)] hover:text-[var(--background)] transition-colors">
              Return to Hub
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
