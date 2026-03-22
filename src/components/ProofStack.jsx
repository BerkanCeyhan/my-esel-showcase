import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    name: "Gerhard V.",
    text: "Ein unglaubliches Fahrgefühl. Auf meiner 200 km Strecke über den Brenner spare ich spürbar Kraft in den letzten 50 km. Das hatte ich mit keinem Carbon so."
  },
  {
    name: "Heinz W.",
    text: "Ich bin jedes Mal begeistert, wenn ich aufsteige. Kein Klappern, kein Vibrieren. Man fühlt sich sofort eins mit der Straße."
  },
  {
    name: "Christian G.",
    text: "Auf jeder Ausfahrt werde ich angesprochen. Die Holzverarbeitung ist auf dem Niveau von handgebauten Booten. Das sieht und fühlt man sofort."
  }
];

export default function ProofStack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.review-card', {
        x: 50, opacity: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-sm uppercase tracking-widest text-muted block mb-4">Verifizierte Erfahrungen</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)]">Gebaut für echte Fahrer.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="review-card bg-background p-10 rounded-[2rem] shadow-sm border border-border/50 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-foreground mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="font-body text-lg italic text-foreground/90 mb-8 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-border/50 pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center font-heading font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-base">{review.name}</p>
                  <p className="font-label text-xs text-muted uppercase flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Verifizierter Käufer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
