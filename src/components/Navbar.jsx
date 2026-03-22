import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl rounded-full py-4 px-6 md:px-8 transition-all duration-500 flex items-center justify-between border ${scrolled ? 'bg-background/90 backdrop-blur-xl border-border/50 text-foreground shadow-sm' : 'bg-transparent border-transparent text-foreground'}`}>
      <div className="font-heading font-bold text-xl tracking-widest uppercase cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        esel
      </div>
      <div className="hidden sm:block">
        <a href="#lead-form" className="bg-cta-bg text-cta-text px-6 py-3 rounded-full font-label font-medium text-sm hover:scale-[1.03] transition-transform inline-block group relative overflow-hidden">
          <span className="relative z-10">Jetzt Maßberatung buchen</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </a>
      </div>
    </nav>
  );
}
