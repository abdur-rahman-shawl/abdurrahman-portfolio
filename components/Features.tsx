"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Shuffler() {
  const [cards, setCards] = useState([
    { id: 1, title: "RAG Pipelines", desc: "Retrieval-augmented generation scaling." },
    { id: 2, title: "Agentic Workflows", desc: "Autonomous planning and execution." },
    { id: 3, title: "LLM Fine-tuning", desc: "Custom model alignment procedures." }
  ]);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        if (last) newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={container} className="relative w-full h-56 flex items-center justify-center pointer-events-none">
      {cards.map((card, idx) => {
        const isTop = idx === 0;
        const isMiddle = idx === 1;
        
        let yOffset = isTop ? 0 : isMiddle ? 20 : 40;
        let scale = isTop ? 1 : isMiddle ? 0.95 : 0.9;
        let opacity = isTop ? 1 : isMiddle ? 0.6 : 0.3;
        let zIndex = 3 - idx;

        return (
          <div 
            key={card.id}
            className="absolute w-full max-w-[80%] bg-[var(--background)] border border-[var(--foreground)] p-4 rounded-xl transition-all duration-700"
            style={{
              transform: `translateY(${yOffset}px) scale(${scale})`,
              opacity,
              zIndex,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
          >
            <div className="font-mono text-[10px] text-[var(--accent)] mb-1 uppercase">MODULE_0{card.id}</div>
            <div className="font-sans font-bold text-base text-[var(--foreground)] tracking-tight uppercase leading-tight">{card.title}</div>
            <div className="font-sans text-xs text-[var(--foreground)]/70 mt-1 uppercase truncate">{card.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

function Typewriter() {
  const logs = [
    "[INFO] Initializing distributed cluster...",
    "[OK] Model weights loaded successfully.",
    "[WARN] Latency spike detected in routing edge.",
    "[SYSTEM] Scaling worker nodes to stabilize...",
    "[OK] 100M+ intent vectors indexed.",
    "[INFO] Ready for real-time inference."
  ];

  const [text, setText] = useState("");
  const [logIdx, setLogIdx] = useState(0);

  useEffect(() => {
    let charIdx = 0;
    const currentLog = logs[logIdx];
    
    setText("");
    
    const typeInterval = setInterval(() => {
      if (charIdx < currentLog.length) {
        setText(currentLog.substring(0, charIdx + 1));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setLogIdx((prev) => (prev + 1) % logs.length);
        }, 1500);
      }
    }, 40);
    
    return () => clearInterval(typeInterval);
  }, [logIdx]);

  return (
    <div className="w-full h-56 bg-[var(--foreground)] rounded-xl p-4 overflow-hidden relative flex flex-col justify-end pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-8 bg-[var(--foreground)] border-b border-[var(--primary)]/10 px-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]/20" />
        </div>
        <div className="font-mono text-[10px] text-[var(--primary)]/40 tracking-widest uppercase">PRODUCTION_TTY</div>
      </div>
      <div className="font-mono text-xs text-[var(--primary)]/80 pt-8 pb-2 leading-relaxed">
         {logs.slice(Math.max(0, logIdx - 3), logIdx).map((log, i) => (
           <div key={i} className="mb-1 opacity-40 truncate">{log}</div>
         ))}
         <div className="text-[var(--primary)] truncate">
           <span className="text-[var(--accent)] mr-2">&gt;</span>
           {text}
           <span className="inline-block w-2.5 h-3.5 bg-[var(--accent)] ml-1 animate-pulse align-middle" />
         </div>
      </div>
    </div>
  );
}

function Scheduler() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.set(cursorRef.current, { x: -20, y: 180, opacity: 0, scale: 1 })
      .to(cursorRef.current, { opacity: 1, duration: 0.2 })
      .to(cursorRef.current, {
        x: 100,
        y: 65,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
      .to(cellRef.current, { backgroundColor: "var(--accent)", color: "var(--background)", duration: 0.1 })
      .to(cursorRef.current, { scale: 1, duration: 0.1 })
      .to(cursorRef.current, {
        x: 220,
        y: 135,
        duration: 0.6,
        ease: "power2.inOut",
        delay: 0.3
      })
      .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
      .to(btnRef.current, { scale: 0.95, duration: 0.1 }, "<")
      .to(btnRef.current, { backgroundColor: "var(--foreground)", color: "var(--background)", duration: 0.1 })
      .to(cursorRef.current, { scale: 1, duration: 0.1 })
      .to(btnRef.current, { scale: 1, duration: 0.1 }, "<")
      .to(cursorRef.current, { opacity: 0, y: 180, duration: 0.4, delay: 0.2 })
      .set(cellRef.current, { backgroundColor: "transparent", color: "var(--foreground)" })
      .set(btnRef.current, { backgroundColor: "transparent", color: "var(--foreground)" });

  }, { scope: containerRef });

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div ref={containerRef} className="relative w-full h-56 bg-[var(--primary)] border border-[var(--foreground)]/10 rounded-xl p-5 overflow-hidden select-none">
       <div className="font-mono text-xs text-[var(--foreground)]/50 mb-4 tracking-widest uppercase">Integration Pipeline</div>
       
       <div className="grid grid-cols-7 gap-1.5 mb-8">
         {days.map((d, i) => (
           <div 
             key={i} 
             ref={i === 3 ? cellRef : null} 
             className="aspect-square flex items-center justify-center font-sans text-sm font-bold border border-[var(--foreground)]/20 rounded-[0.25rem] text-[var(--foreground)] bg-[var(--background)] transition-colors"
           >
             {d}
           </div>
         ))}
       </div>

       <div className="flex justify-end pr-2">
         <button 
           ref={btnRef}
           className="px-5 py-2 border border-[var(--foreground)] rounded-full text-xs font-mono uppercase tracking-widest transition-colors"
         >
           Deploy
         </button>
       </div>

       <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none z-10 w-8 h-8 opacity-0 text-black">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1" className="w-full h-full transform -rotate-12 translate-x-1 translate-y-1 drop-shadow-lg">
            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z" />
          </svg>
       </div>
    </div>
  );
}

export default function Features() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".feature-header-part", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} id="features" className="w-full bg-[var(--background)] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-4">
          <h2 className="flex flex-col">
            <span className="feature-header-part font-sans font-bold text-lg md:text-2xl text-[var(--foreground)] max-w-2xl uppercase tracking-tighter mb-2">
              The Architecture
            </span>
            <span className="feature-header-part font-serif italic text-5xl md:text-[5rem] lg:text-[6rem] text-[var(--accent)] leading-[0.9]">
              Capabilities designed for absolute scale.
            </span>
          </h2>
        </div>

        <div className="features-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="feature-card brutalist-border rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 bg-[var(--background)]">
            <div>
              <div className="font-mono text-xs tracking-widest text-[var(--accent)] mb-3 uppercase font-bold">01 / Logic</div>
              <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-[var(--foreground)] leading-[1.1]">Complex AI Orchestration</h3>
            </div>
            <div className="mt-auto py-4">
              <Shuffler />
            </div>
            <p className="font-mono text-sm opacity-70 mt-4 tracking-normal leading-relaxed text-[var(--foreground)]">
              Engineering intent-based NLP and LLM fine-tuning structures. Breaking down query ambiguities before passing to highly specialized deterministic sub-agents.
            </p>
          </div>

          <div className="feature-card brutalist-border rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 bg-[var(--background)]">
            <div>
              <div className="font-mono text-xs tracking-widest text-[var(--accent)] mb-3 uppercase font-bold">02 / Systems</div>
              <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-[var(--foreground)] leading-[1.1]">Production Infrastructure</h3>
            </div>
            <div className="mt-auto py-4">
              <Typewriter />
            </div>
            <p className="font-mono text-sm opacity-70 mt-4 tracking-normal leading-relaxed text-[var(--foreground)]">
              Building secure microservices that handle millions of requests without failing. Implementing custom RAG pipelines natively inside scalable environments.
            </p>
          </div>

          <div className="feature-card brutalist-border rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 bg-[var(--background)]">
            <div>
              <div className="font-mono text-xs tracking-widest text-[var(--accent)] mb-3 uppercase font-bold">03 / Implementation</div>
              <h3 className="font-sans font-bold text-3xl uppercase tracking-tight text-[var(--foreground)] leading-[1.1]">Full-Stack AI Integration</h3>
            </div>
            <div className="mt-auto py-4 relative z-10">
              <Scheduler />
            </div>
            <p className="font-mono text-sm opacity-70 mt-4 tracking-normal leading-relaxed text-[var(--foreground)]">
              Designing the ultimate control surface around raw AI models. From Web components to natively packaged iOS & Android platforms, fully offline-enabled.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
