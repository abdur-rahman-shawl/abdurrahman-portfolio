"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TopographicVFX() {
  const filterRef = useRef<SVGFETurbulenceElement>(null);
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!filterRef.current) return;
    
    // Animate the baseFrequency to create the liquid neural-net warp
    const proxy = { freq: 0.003 };
    gsap.to(proxy, {
      freq: 0.008,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      onUpdate: () => {
        filterRef.current?.setAttribute("baseFrequency", `${proxy.freq} 0.005`);
      }
    });

    // Animate individual topographic rings to drift continuously against the displacement
    gsap.to(".topo-ring", {
        rotation: "random(-10, 10)",
        x: "random(-15, 15)",
        y: "random(-15, 15)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
    });
    
  }, { scope: container });

  return (
    <div ref={container} className="absolute inset-0 w-full h-full overflow-hidden opacity-30 bg-[#111111]">
      <svg className="w-full h-full min-w-full min-h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <filter id="distortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              ref={filterRef}
              type="fractalNoise" 
              baseFrequency="0.003 0.005" 
              numOctaves="1" 
              result="noise" 
            />
            {/* Soft, organic displacement simulating AI topographic latents */}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="60" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>

        <g filter="url(#distortion)">
          {/* Signal Red Orbs generating topographic tension points */}
          <ellipse cx="20%" cy="30%" rx="35%" ry="45%" fill="var(--accent)" opacity="0.4" className="topo-ring" />
          <ellipse cx="80%" cy="70%" rx="40%" ry="50%" fill="var(--accent)" opacity="0.3" className="topo-ring" />
          <ellipse cx="50%" cy="50%" rx="20%" ry="30%" fill="var(--background)" opacity="0.1" className="topo-ring" />
          
          {/* Rigid System Grid Lines that mathematically distort under the filter */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line 
              key={`h-${i}`} 
              x1="-10%" y1={`${i * 8}%`} 
              x2="110%" y2={`${i * 8}%`} 
              stroke="var(--background)" 
              strokeWidth="2" 
              opacity={i % 3 === 0 ? "0.3" : "0.1"} 
              className="topo-ring"
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <line 
              key={`v-${i}`} 
              x1={`${i * 6}%`} y1="-10%" 
              x2={`${i * 6}%`} y2="110%" 
              stroke="var(--background)" 
              strokeWidth="1" 
              opacity="0.1" 
              className="topo-ring"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
