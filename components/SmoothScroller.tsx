"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
