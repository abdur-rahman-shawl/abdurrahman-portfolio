"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const container = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger entrance once past 500px scroll depth
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    // Subtle constant moving animation (yoyo style)
    if (!container.current) return;
    
    gsap.to(".arrow-icon", {
      y: -4,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, { scope: container });

  useGSAP(() => {
    // Dynamic Enter/Leave logic targeting layout state
    if (isVisible) {
      gsap.to(container.current, { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        ease: "power3.out", 
        pointerEvents: "auto" 
      });
    } else {
      gsap.to(container.current, { 
        y: 20, 
        opacity: 0, 
        scale: 0.8, 
        duration: 0.3, 
        ease: "power2.in", 
        pointerEvents: "none" 
      });
    }
  }, { scope: container, dependencies: [isVisible] });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={container}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--accent)] border border-[var(--background)]/10 shadow-lg hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors duration-300 opacity-0 pointer-events-none translate-y-5 scale-[0.8]"
      aria-label="Scroll to top"
    >
      <ArrowUp className="arrow-icon w-6 h-6" strokeWidth={1.5} />
    </button>
  );
}
