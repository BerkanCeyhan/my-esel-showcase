import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://cdn.shopify.com/s/files/1/1016/1999/0792/files/esel-wood-road-bike-side-view-q.jpg?v=1772010434",
  "https://cdn.shopify.com/s/files/1/1016/1999/0792/files/esel-wood-road-bike-studio-02.jpg?v=1772032353",
  "https://cdn.shopify.com/s/files/1/1016/1999/0792/files/esel-wood-road-bike-studio-04.jpg?v=1773151841"
];

export default function ProductSelector() {
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-element', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-20 bg-background overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Product Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <div className="product-element bg-[#E8E5DC] rounded-[2rem] overflow-hidden aspect-[4/3] flex items-center justify-center relative">
            <img 
              src={IMAGES[activeImage]} 
              alt="Road Esel" 
              className="w-full h-full object-cover transition-opacity duration-500 max-h-[700px]"
            />
          </div>
          <div className="product-element flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {IMAGES.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-foreground' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover bg-[#E8E5DC]"/>
              </button>
            ))}
          </div>
        </div>

        {/* Product Details & Anchoring */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <h1 className="product-element font-heading text-4xl md:text-5xl mb-2 text-foreground">Road Esel</h1>
          <p className="product-element font-body text-xl text-muted mb-8">Maßgefertigt nach Größe</p>
          
          <div className="product-element mb-10">
            <span className="font-heading text-[2.5rem] tracking-tight block">€7.690</span>
            <span className="font-label text-sm text-foreground/80 mt-2 block">
              Weniger als ein Custom-Titanrahmen.<br/>
              Mehr Charakter als jedes Carbon je haben wird.
            </span>
            <div className="mt-4 p-4 bg-surface rounded-xl border border-border/50">
              <span className="font-label text-sm flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Ab ca. €128/Monat über Bike-Leasing.
              </span>
            </div>
          </div>

          <ul className="product-element space-y-4 mb-10 font-body text-foreground/80 border-t border-b border-border/50 py-8">
            <li className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Esel Hollow Tec</strong> Performance Wood Frame</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Shimano Ultegra Di2</strong> 2x12 elektronische Schaltung</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span><strong>Pancho Wheels</strong> Rush 50 Premium-Carbon-Laufräder</span>
            </li>
            <li className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Inklusive maßgeschneiderter Rahmenanpassung</span>
            </li>
          </ul>

          <div className="product-element">
            <a href="#lead-form" className="w-full bg-cta-bg text-cta-text px-8 py-5 rounded-full font-label font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center text-center relative overflow-hidden group">
              <span className="relative z-10">Jetzt Maßberatung buchen</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <p className="font-label text-xs text-center text-muted mt-4 uppercase tracking-wider">Keine Vorauszahlung nötig</p>
          </div>
        </div>

      </div>
    </section>
  );
}
