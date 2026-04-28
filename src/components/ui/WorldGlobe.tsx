"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function WorldGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.058, 0.298, 0.506], // Liberty Navy
      markerColor: [0.05, 0.8, 0.74],    // Liberty Teal
      glowColor: [0.058, 0.298, 0.506],
      markers: [
        { location: [19.076, 72.8777], size: 0.1 },   // Mumbai
        { location: [37.7749, -122.4194], size: 0.05 }, // USA
        { location: [51.5074, -0.1278], size: 0.05 },   // UK
        { location: [-33.8688, 151.2093], size: 0.05 }, // Australia
      ],
      // @ts-ignore
      onRender: (state) => {
        // This makes it spin automatically
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    // THE FIX: Explicit relative positioning and pointer handling
    <div className="relative w-full aspect-square max-w-[600px] mx-auto overflow-visible">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        style={{ 
          width: "100%", 
          height: "100%", 
          cursor: "grab", 
          contain: "layout paint size",
          opacity: 1 // Force visibility
        }}
      />
    </div>
  );
}