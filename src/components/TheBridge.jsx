import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TheBridge() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bridge-text', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
      });
      gsap.from('.bridge-image', {
        x: 40, opacity: 0, duration: 1, delay: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <span className="bridge-text font-label text-sm uppercase tracking-widest text-muted block mb-4">Das Geheimnis: Esel Hollow Tec</span>
          <h2 className="bridge-text font-heading text-[clamp(2rem,5vw,3.5rem)] leading-none mb-6">
            Was vor 500 Jahren funktionierte,<br/>
            <span className="font-heading italic font-light text-muted">funktioniert auch heute.</span>
          </h2>
          <div className="bridge-text font-body space-y-4 text-foreground/80 text-lg">
            <p>
              Carbon muss durch komplexes Layup-Engineering dazu gebracht werden, Stöße zu schlucken. Holz tut das von Natur aus. 
            </p>
            <p>
              Im patentierten <strong>Hollow Tec Verfahren</strong> laminieren wir ausgewählte Eschenfurnier-Schichten zu einem hohlen Monocoque-Rahmen mit definierter Faserorientierung pro Segment. Das Ergebnis: Ein 8.5 kg Rennrad mit der Seitensteifigkeit, die du im Wiegetritt brauchst. Und einer vertikalen Dämpfung, die du nach 150 km in den Händen spürst.
            </p>
            <p>
              <em>Shimano Ultegra Di2 2×12</em>. Pancho Wheels Rush 50 Carbon-Laufräder. Kein Kompromiss an der Spec. Nur am Material, das sie trägt.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="bridge-image absolute -inset-4 bg-highlight/20 rounded-[2rem] -z-10 rotate-2"></div>
          <img 
            src="https://cdn.shopify.com/s/files/1/1016/1999/0792/files/esel-wood-road-bike-side-view-q.jpg?v=1772010434" 
            alt="Hollow Tec Performance Wood Frame" 
            className="bridge-image w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
