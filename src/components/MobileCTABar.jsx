import React, { useState, useEffect } from 'react';

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden transition-all duration-300">
      <div className="bg-surface/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-border/50 flex flex-col gap-3 relative">
        <button 
          onClick={() => setDismissed(true)} 
          className="absolute -top-3 -right-3 w-8 h-8 bg-background border border-border/50 rounded-full flex items-center justify-center shadow-sm text-muted hover:text-foreground"
          aria-label="Schließen"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div className="flex justify-between items-center px-1">
          <div>
            <p className="font-heading font-bold text-base text-foreground leading-tight">Road Esel</p>
            <p className="font-label text-xs text-foreground/80 tracking-widest mt-0.5">★★★★★</p>
          </div>
          <p className="font-heading font-bold text-lg text-foreground">€7.690</p>
        </div>
        
        <a href="#lead-form" className="w-full bg-cta-bg text-cta-text py-3.5 rounded-xl font-label font-bold text-sm uppercase tracking-wide text-center active:scale-[0.98] transition-transform">
          Maßberatung buchen
        </a>
      </div>
    </div>
  );
}
