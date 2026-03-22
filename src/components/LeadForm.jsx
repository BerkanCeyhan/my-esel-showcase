import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LeadForm() {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.form-element', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-form" ref={containerRef} className="py-24 px-6 md:px-12 bg-surface border-t border-border/50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 bg-background rounded-[2rem] p-8 md:p-12 shadow-sm border border-border/40">
        
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <span className="form-element font-label text-sm uppercase tracking-widest text-muted block mb-4">6 bis 8 Wochen bis zu deinem Unikat.</span>
          <h2 className="form-element font-heading text-[clamp(2rem,4vw,3rem)] leading-tight mb-6">Der erste Schritt dauert 2 Minuten.</h2>
          <p className="form-element font-body text-base text-foreground/80 mb-8">
            Hinterlasse deine unverbindlichen Daten. Unser Team meldet sich umgehend bei dir, um deine Körpermaße und individuellen Ausstattungs-Wünsche für den Road Esel zu besprechen.
          </p>
          <div className="form-element flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQEl5nre9CwJ0w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674748828566?e=2147483647&v=beta&t=0NE15pW--p9oIWTErV9wDoLPj5iCkGnIMmPB1a3tDWQ" alt="Christoph - Esel Gründer" className="w-full h-full object-cover"/>
            </div>
            <div>
              <p className="font-heading text-sm font-bold">Christoph</p>
              <p className="font-label text-xs text-muted uppercase">Esel Gründer & Architekt</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Anfrage erhalten!</h3>
              <p className="font-body text-foreground/80">Wir melden uns innerhalb von 24 Stunden bei dir, um die Maßberatung zu starten.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 form-element">
                <div className="space-y-2">
                  <label htmlFor="vorname" className="font-label text-xs font-bold uppercase tracking-wider text-foreground">Vorname</label>
                  <input type="text" id="vorname" required className="w-full bg-surface border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors font-body" placeholder="Max" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="nachname" className="font-label text-xs font-bold uppercase tracking-wider text-foreground">Nachname</label>
                  <input type="text" id="nachname" required className="w-full bg-surface border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors font-body" placeholder="Mustermann" />
                </div>
              </div>
              
              <div className="space-y-2 form-element">
                <label htmlFor="email" className="font-label text-xs font-bold uppercase tracking-wider text-foreground">E-Mail Adresse</label>
                <input type="email" id="email" required className="w-full bg-surface border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors font-body" placeholder="max@beispiel.de" />
              </div>

              <div className="space-y-2 form-element">
                <label htmlFor="phone" className="font-label text-xs font-bold uppercase tracking-wider text-foreground">Telefonnummer (Optional)</label>
                <input type="tel" id="phone" className="w-full bg-surface border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors font-body" placeholder="+49 151 12345678" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 form-element">
                <div className="space-y-2">
                  <label htmlFor="height" className="font-label text-xs font-bold uppercase tracking-wider text-foreground">Körpergröße (cm)</label>
                  <input type="number" id="height" required min="150" max="220" className="w-full bg-surface border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors font-body" placeholder="185" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="style" className="font-label text-xs font-bold uppercase tracking-wider text-foreground">Bevorzugter Fahrstil</label>
                  <select id="style" className="w-full bg-surface border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors font-body appearance-none cursor-pointer">
                    <option value="endurance">Endurance / Langstrecke</option>
                    <option value="race">Race / Aggressiv</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="form-element w-full mt-2 bg-cta-bg text-cta-text px-6 py-4 rounded-xl flex flex-col items-center justify-center gap-1.5 hover:scale-[1.02] transition-transform relative overflow-hidden group">
                <span className="relative z-10 font-label font-bold text-lg">Maßberatung anfragen</span>
                <span className="relative z-10 font-mono text-[10px] text-white/70">🔒 Deine Daten sind sicher. Kein Spam. Jederzeit abmeldbar.</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
