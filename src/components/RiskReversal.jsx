import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RiskReversal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.risk-element', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto bg-surface rounded-[2rem] p-10 md:p-16 border border-border/50 text-center relative overflow-hidden">
        {/* Decorative ambient background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-highlight/20 rounded-full blur-3xl"></div>
        
        <div className="risk-element w-20 h-20 bg-background rounded-full mx-auto flex items-center justify-center mb-8 shadow-sm border border-border">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        
        <h3 className="risk-element font-heading text-3xl md:text-4xl mb-6">Kein Risiko. Nur Fahrfreude.</h3>
        
        <p className="risk-element font-body text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
          Wir glauben zu 100% an die Langlebigkeit unserer Hollow Tec Rahmen. Deshalb gibt es unsere kompromisslose Zusicherung:
        </p>

        <div className="risk-element flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold text-accent mb-2">5 Jahre</span>
            <span className="font-label text-sm uppercase tracking-wider text-muted">Rahmen-Garantie</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold text-accent mb-2">30 Tage</span>
            <span className="font-label text-sm uppercase tracking-wider text-muted">Geld-zurück-Garantie</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-3xl font-bold text-accent mb-2">ISO Norm</span>
            <span className="font-label text-sm uppercase tracking-wider text-muted">Bis 120kg geprüft</span>
          </div>
        </div>

        <p className="risk-element font-label text-xs uppercase tracking-widest text-muted mt-12">
          Design und handgefertigt in Österreich
        </p>
      </div>
    </section>
  );
}
