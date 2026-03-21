"use client";

import { useEffect, useRef } from "react";

export default function SemanticMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let columns = 0;
    let rows = 0;
    const fontSize = 14;
    
    // Brutalist Dataset: Hex, Binary, AI logic syntax, Mathematics
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-/<>[]{}=";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.ceil(canvas.width / fontSize);
      rows = Math.ceil(canvas.height / fontSize);
      
      // Initialize massive black void background
      ctx.fillStyle = "#111111"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      // Paint over previous frame with a very faint black to create a trailing ghost effect
      ctx.fillStyle = "rgba(17, 17, 17, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Hard monospace mapping matching the rest of the site's typewriter vibe
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textAlign = "center";

      // Fire random semantic encodings across 3% of the grid matrix every frame
      const cellsToUpdate = Math.floor((columns * rows) * 0.03); 
      
      for (let i = 0; i < cellsToUpdate; i++) {
        const xIndex = Math.floor(Math.random() * columns);
        const yIndex = Math.floor(Math.random() * rows);
        
        const x = xIndex * fontSize + (fontSize / 2);
        const y = yIndex * fontSize;
        
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Target specific coordinates to aggressively wipe out previous ghost frames
        // This ensures the typewriter text looks extremely crisp before fading
        ctx.fillStyle = "#111111"; // Absolute Black
        ctx.fillRect(x - (fontSize/2), y - fontSize, fontSize, fontSize);

        // 99% chance of Paper (beige), 1% chance of Signal Red
        const isAccent = Math.random() > 0.99;
        ctx.fillStyle = isAccent ? "#E63B2E" : "rgba(232, 228, 221, 0.25)";
        
        ctx.fillText(char, x, y);
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    // Execute engine
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
    />
  );
}
