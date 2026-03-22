import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterMorph() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.morph-content', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-20 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto morph-content mb-16 text-center">
        <h2 className="font-heading text-[clamp(2rem,6vw,3.5rem)] mb-4">Die natürliche Perfektion von Eschenholz.</h2>
        <p className="font-body text-lg text-muted max-w-2xl mx-auto">
          Was sich nach 100 km anders anfühlt. Und warum.
        </p>s
      </div>

      <div
        ref={containerRef}
        className="relative morph-content w-full max-w-5xl mx-auto min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden cursor-ew-resize select-none shadow-xl border border-border"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER STATE (Bottom Layer) */}
        <div className="absolute inset-0 bg-[#E8E5DC] flex flex-col justify-center p-8 md:p-20 text-accent">
          <div className="max-w-md ml-auto text-right">
            <span className="font-label text-sm uppercase tracking-widest text-muted/80 mb-2 block">Das Esel Gefühl</span>
            <h3 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">Lebendig & Geschmeidig</h3>
            <p className="font-body text-base md:text-lg text-foreground/80">
              Natürliche Vibrationsdämpfung, die dich auch nach 100km frisch hält. Jeder Rahmen ist ein absolutes Unikat mit eigener Holzmaserung. Ein Rad, das atmet.
            </p>
          </div>
        </div>

        {/* BEFORE STATE (Top Layer, Clipped) */}
        <div
          className="absolute inset-0 bg-[#1A1A1A] flex flex-col justify-center p-8 md:p-20 text-background border-r border-[#C8C3B6]/30"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <div className="max-w-md">
            <span className="font-label text-sm uppercase tracking-widest text-background/60 mb-2 block">Der Status Quo</span>
            <h3 className="font-heading text-3xl md:text-4xl mb-4 text-background">Steif & Ermüdend</h3>
            <p className="font-body text-base md:text-lg text-background/80">
              Rennräder von der Stange, die deinen Körper belasten. Mikrovibrationen rauben Energie, das Fahrgefühl ist hart, das Design generisch. Einheitsbrei aus Carbon.
            </p>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-highlight cursor-ew-resize flex items-center justify-center -ml-0.5"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-12 h-12 bg-background border-2 border-highlight rounded-full flex items-center justify-center shadow-lg text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6" /><path d="m15 18 6-6-6-6" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
