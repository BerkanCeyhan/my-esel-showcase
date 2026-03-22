import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OBJECTIONS = [
  {
    question: "Ist Holz überhaupt robust genug für Performance-Radsport?",
    answer: "Absolut. Holz beweist seine strukturelle Integrität seit Jahrhunderten im Boots- und Flugzeugbau. Unser Hollow Tec Rahmen ist nach strengsten ISO-Normen bis 120 kg Fahrergewicht getestet. Zudem gewähren wir 5 Jahre Garantie auf den Rahmen."
  },
  {
    question: "Ist das Rad nicht viel schwerer als mein aktuelles Carbon-Rennrad?",
    answer: "Nein. Ein kompletter Road Esel beginnt bei 8.5 kg Gesamtgewicht. Damit sind wir voll kompetitiv mit gehobenen Carbon-Rennrädern – bieten aber den enormen Vorteil der natürlichen Vibrationsdämpfung, den kein Carbon-Rahmen erreicht."
  },
  {
    question: "Sind 7.690 € den Preis wert?",
    answer: "Du kaufst kein Massenprodukt von der Stange. Dein Road Esel wird exakt nach deinen Körpermaßen (Größe, Inseam) in Österreich sonderangefertigt. Jeder Rahmen ist durch die natürliche Maserung ein absolutes Unikat (1-of-1). Gepaart mit Shimano Ultegra Di2 und handgefertigten Carbon-Laufrädern investierst du in kompromisslose Spitzenklasse."
  },
  {
    question: "Wie läuft die Maßanfertigung ab?",
    answer: "Nach deiner Anfrage in unserem Formular vereinbaren wir ein persönliches Beratungsgespräch (Video-Call oder in unserem Flagship-Store). Wir analysieren deine Maße und deinen Fahrstil (Race/Endurance), bevor dein Rahmen in Produktion geht."
  }
];

export default function ObjectionCrusher() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Disabled entrance animation for FAQ items to ensure they are visible on first load
    // without depending on ScrollTrigger geometry calculations.
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-20 bg-background text-foreground shrink-0 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)]">Bevor du entscheidest.</h2>
        </div>

        <div className="space-y-4">
          {OBJECTIONS.map((item, idx) => (
            <div 
              key={idx} 
              className={`faq-item border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-surface shadow-sm' : 'bg-transparent hover:bg-surface/50'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none"
              >
                <span className="font-heading text-lg md:text-xl font-bold pr-4">{item.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openIndex === idx ? 'bg-accent text-background border-accent rotate-45' : 'border-current text-foreground'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-8 md:px-8 font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
