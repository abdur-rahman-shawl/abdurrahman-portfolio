"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

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
      <Link 
        href="/" 
        onClick={(e) => handleScroll(e, "body")}
        className="font-sans font-bold text-xl tracking-tight uppercase cursor-pointer"
      >
        AR.
      </Link>
      <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest">
        <Link href="/#features" onClick={(e) => handleScroll(e, "#features")} className="lift-hover">Features</Link>
        <Link href="/#specs" onClick={(e) => handleScroll(e, "#specs")} className="lift-hover">Profile</Link>
        <Link href="/#protocol" onClick={(e) => handleScroll(e, "#protocol")} className="lift-hover">Protocol</Link>
      </div>
      <Link 
        href="/#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className="magnetic-btn bg-[var(--accent)] text-[var(--primary)] px-8 py-3 rounded-full font-sans font-bold text-sm tracking-wide hover:bg-[var(--foreground)] transition-colors text-center"
      >
        Deploy
      </Link>
    </nav>
  );
}
