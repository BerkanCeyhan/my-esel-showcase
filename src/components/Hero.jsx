import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.3,
        ease: 'power3.out'
      });
      
      // Parallax effect on image
      gsap.to('.hero-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[100dvh] flex items-end pt-24 pb-20 md:pt-32 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://cdn.shopify.com/s/files/1/1016/1999/0792/files/esel-wood-road-bike-outdoor-02.jpg?v=1771945145" 
          alt="Esel Road Bike in Nature" 
          className="hero-image w-full h-[120%] object-cover object-center absolute -top-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-3xl">
          <h1 className="font-heading text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-foreground mb-6">
            Du kennst Geschwindigkeit.<br/>
            <span className="text-foreground italic inline-block mt-4 px-6 py-2 bg-background/80 backdrop-blur-md rounded-2xl shadow-sm border border-border/30 text-[clamp(1.75rem,4vw,3.5rem)]">Aber kennst du das Gefühl?</span>
          </h1>
          <p className="hero-element font-body text-lg md:text-xl text-foreground/80 mb-10 max-w-lg">
            Karbon ist schnell, aber es lebt nicht. Entdecke den Road Esel: 8.5 kg von purer österreichischer Handwerkskunst, die straffes Rennrad-Handling mit der natürlichen Eigendämpfung von Holz verbindet. Maßgeschneidert auf deinen Körper.
          </p>
          <div className="hero-element flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#lead-form" className="bg-cta-bg text-cta-text px-8 py-4 rounded-full font-label font-bold text-lg hover:scale-[1.03] transition-transform flex items-center justify-center relative overflow-hidden group">
              <span className="relative z-10">Jetzt Maßberatung buchen</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <div className="font-label text-sm text-foreground/80 uppercase tracking-widest flex items-center gap-2">
              <span>★★★★★ 4.9/5</span>
              <span className="opacity-70">· Verifizierte Käufer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
