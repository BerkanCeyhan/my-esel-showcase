import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AwardsStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.award-item', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: containerRef.current, start: 'top 90%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 border-y border-border/60 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 opacity-80">
        <div className="award-item text-center flex-1">
          <h4 className="font-heading font-bold text-lg uppercase tracking-wider mb-1 text-foreground">German Design Award</h4>
          <p className="font-label text-sm text-muted">Winner</p>
        </div>
        <div className="award-item hidden md:block w-px h-12 bg-border"></div>
        <div className="award-item border-t border-border w-full md:hidden"></div>
        <div className="award-item text-center flex-1">
          <h4 className="font-heading font-bold text-lg uppercase tracking-wider mb-1 text-foreground">Eurobike Award</h4>
          <p className="font-label text-sm text-muted">Winner</p>
        </div>
        <div className="award-item hidden md:block w-px h-12 bg-border"></div>
        <div className="award-item border-t border-border w-full md:hidden"></div>
        <div className="award-item text-center flex-1">
          <h4 className="font-heading font-bold text-lg uppercase tracking-wider mb-1 text-foreground">ISPO Brand New</h4>
          <p className="font-label text-sm text-muted">Overall Winner</p>
        </div>
      </div>
    </section>
  );
}
