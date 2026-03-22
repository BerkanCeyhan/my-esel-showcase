import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UrgencyClose() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.urgency-element', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-accent text-background text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="urgency-element font-heading text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-4">
          Die Saison läuft.<br/>Aktuelle Lieferzeit: 6 bis 8 Wochen ab Beratung.
        </h2>
        <p className="urgency-element font-heading italic text-background/70 text-[clamp(1.5rem,3vw,2.5rem)] mb-10">
          Jede Rahmenfertigung ist Handarbeit.
        </p>
        
        <div className="urgency-element">
          <a href="#lead-form" className="inline-block bg-background text-foreground px-10 py-5 rounded-full font-label font-bold text-xl hover:scale-[1.03] transition-transform">
            Sichere dir deinen Platz
          </a>
        </div>
        
        <div className="urgency-element mt-8 flex items-center justify-center gap-4 text-sm font-label uppercase tracking-widest opacity-80">
          <span className="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Kostenlose Beratung</span>
          <span className="opacity-40">•</span>
          <span className="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> 30-Tage Geld-zurück</span>
        </div>
      </div>
      
      {/* Subtle organic texture in the dark background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <img src="https://images.unsplash.com/photo-1596395898018-8d070b4bebf5?auto=format&fit=crop&w=1600&q=80" alt="Texture" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
