import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COMPARISON = [
  { spec: "Fahrgefühl & Dämpfung", carbon: "Hart, überträgt Mikrovibrationen", wood: "Natürliche Dämpfung, extrem laufruhig" },
  { spec: "Gewicht (Gesamtrad)", carbon: "ab ca. 7.5 kg", wood: "ab 8.5 kg (kompetitiv)" },
  { spec: "Einzigartigkeit", carbon: "Gleiche Formel, massengefertigt", wood: "Jedes Holz ist ein absolutes Unikat" },
  { spec: "Nachhaltigkeit", carbon: "Hoher Energieverbrauch, Sondermüll", wood: "Nachwachsender Rohstoff, lokal" },
  { spec: "Langlebigkeit", carbon: "Haarriss nach einem Sturz = Rahmen entsorgen", wood: "Reparierbar. Bewährt seit Jahrhunderten im Boots- und Flugzeugbau." },
];

export default function MechanismMatrix() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.matrix-row', {
        x: -30, opacity: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-20 bg-surface overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-foreground">Warum Holz gewinnt.</h2>
        </div>

        <div className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border/50">
          
          {/* Header */}
          <div className="grid grid-cols-3 p-6 md:p-8 border-b border-border/50 bg-[#E8E5DC]/50">
            <div className="font-label text-sm md:text-base font-bold text-muted uppercase tracking-wider hidden md:block">Metrik</div>
            <div className="font-label text-sm md:text-base font-bold text-muted uppercase tracking-wider block md:hidden">Metrik</div>
            <div className="font-heading text-lg md:text-xl text-muted text-center">Carbon-Standard</div>
            <div className="font-heading text-lg md:text-xl text-foreground text-center font-bold">Esel Hollow Tec</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border/50">
            {COMPARISON.map((item, idx) => (
              <div key={idx} className="matrix-row grid grid-cols-3 p-6 md:p-8 hover:bg-surface/50 transition-colors">
                <div className="font-heading font-bold text-sm md:text-lg flex items-center pr-2">
                  {item.spec}
                </div>
                <div className="font-body text-sm md:text-base text-muted flex items-center justify-center text-center px-2">
                  <span className="opacity-70">{item.carbon}</span>
                </div>
                <div className="font-body text-sm md:text-base text-foreground font-medium flex items-center justify-center text-center px-4 py-2 bg-surface rounded-xl border border-highlight/30 mx-1 md:mx-4">
                  <span className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent hidden md:block"><polyline points="20 6 9 17 4 12"/></svg>
                    {item.wood}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
