"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Specs() {
  const container = useRef<HTMLElement>(null);

  const skills = [
    {
      category: "GenAI & NLP",
      items: ["LLM Orchestration (OpenAI, Gemini, Anthropic)", "Autonomous Agents", "RAG Patterns", "Prompt Engineering", "Function Calling", "BIO NER Tagging", "SpaCy"]
    },
    {
      category: "Backend Engineering",
      items: ["Python (FastAPI, Flask, Django)", "Node.js", "PHP", "asyncio", "Linux Scripting"]
    },
    {
      category: "Frontend & UX",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "PWA Development"]
    },
    {
      category: "Data & Infrastructure",
      items: ["PostgreSQL (Supabase)", "MySQL", "MongoDB", "Redis", "Apache SOLR", "Vector DBs (pgvector, ChromaDB)", "Docker", "GCP"]
    },
    {
      category: "Search & SEO",
      items: ["Schema.org (Google Rich Snippets)", "Automated Internal Linking", "Semantic Search Optimization."]
    }
  ];

  useGSAP(() => {
    gsap.from(".spec-item", {
      scrollTrigger: {
        trigger: ".spec-grid",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
    
    gsap.from(".spec-text", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section ref={container} id="specs" className="w-full bg-[var(--background)] py-32 md:py-48 px-6 border-t border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Column: Summary */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:sticky lg:top-40 h-fit">
          <div className="font-mono text-xs tracking-widest text-[var(--accent)] mb-2 uppercase font-bold">
            04 / Operator Profile
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tighter text-[var(--foreground)] leading-[1.1]">
            Bridging complex AI R&D and robust enterprise engineering.
          </h2>
          
          <div className="spec-text font-mono text-sm md:text-base leading-relaxed text-[var(--foreground)]/70 flex flex-col gap-6 mt-4">
            <p>
              I am a Software Engineer specializing in Generative AI and Scalable Architectures with a proven track record of engineering production-grade AI systems. Reporting directly to the CTO, I bridge the gap between abstract research and concrete business value.
            </p>
            <p>
              From orchestrating autonomous multi-agent workflows to architecting semantic search engines resolving over 100 million records, I build high-load systems (100k+ daily requests) that drive measurable business growth instead of just showcasing theoretical toys.
            </p>
          </div>
          
          <div className="mt-8 border border-[var(--foreground)]/10 p-6 rounded-[1.5rem] bg-[var(--primary)]/30">
             <div className="font-mono text-[10px] tracking-widest text-[var(--foreground)]/40 uppercase mb-4">Capacity Metrics</div>
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <div className="font-sans font-bold text-3xl md:text-4xl text-[var(--foreground)] tracking-tighter hover:text-[var(--accent)] transition-colors">100M+</div>
                   <div className="font-mono text-[10px] md:text-xs text-[var(--foreground)]/60 mt-1 uppercase tracking-widest">Records Resolved</div>
                </div>
                <div>
                   <div className="font-sans font-bold text-3xl md:text-4xl text-[var(--foreground)] tracking-tighter hover:text-[var(--accent)] transition-colors">100k+</div>
                   <div className="font-mono text-[10px] md:text-xs text-[var(--foreground)]/60 mt-1 uppercase tracking-widest">Daily Requests</div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="spec-grid w-full lg:w-1/2 flex flex-col gap-12 pt-8 lg:pt-0">
           {skills.map((skillGroup, idx) => (
             <div key={idx} className="spec-item flex flex-col gap-4 border-b border-[var(--foreground)]/10 pb-12 last:border-0 last:pb-0">
                <h3 className="font-mono text-sm tracking-widest text-[var(--foreground)] font-bold uppercase">
                  [{idx + 1}] {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2.5 mt-2">
                   {skillGroup.items.map((item, i) => (
                     <div 
                       key={i} 
                       className="px-3.5 py-1.5 border border-[var(--foreground)]/20 rounded-md font-mono text-xs text-[var(--foreground)]/80 hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:-translate-y-0.5 transition-all cursor-default"
                     >
                        {item}
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
        
      </div>
    </section>
  );
}
