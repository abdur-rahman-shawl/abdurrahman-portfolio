"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      start: "top -10%",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(245, 243, 238, 0.7)", // #F5F3EE
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(17, 17, 17, 0.1)",
            color: "#111111",
            duration: 0.4,
            ease: "power2.out",
          });
        }
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          border: "1px solid transparent",
          color: "#E8E4DD",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-4 rounded-[3rem] w-[95%] max-w-5xl transition-all"
      style={{ color: "#E8E4DD" }}
    >
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="font-sans font-bold text-xl tracking-tight uppercase cursor-pointer"
      >
        Abdur.
      </a>
      <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest">
        <a href="#features" className="lift-hover">Features</a>
        <a href="#philosophy" className="lift-hover">Philosophy</a>
        <a href="#protocol" className="lift-hover">Protocol</a>
      </div>
      <a 
        href="#contact"
        onClick={(e) => { 
          e.preventDefault(); 
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); 
        }}
        className="magnetic-btn bg-[var(--accent)] text-[var(--primary)] px-8 py-3 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-[var(--foreground)] transition-colors text-center"
      >
        Deploy
      </a>
    </nav>
  );
}
