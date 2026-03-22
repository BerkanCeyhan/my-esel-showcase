import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#D5D2C8] text-foreground pt-16 pb-8 px-6 md:px-12 rounded-t-[3rem] mt-[-2rem] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="font-heading font-bold text-2xl tracking-widest uppercase mb-4">esel</div>
          <p className="font-body text-foreground/80 text-sm leading-relaxed mb-6">
            Wir sind eine Fahrradmanufaktur, die Fahrten formt, die uns formen – spezialisiert auf Holzrahmen mit Design und Persönlichkeit.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-[#1A1A1A]">System Operational</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-row gap-16 lg:gap-24">
          <div className="flex flex-col gap-3 font-label text-sm">
            <h4 className="font-bold text-foreground mb-2">Legal</h4>
            <a href="#" className="text-[#6B6860] hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="text-[#6B6860] hover:text-foreground transition-colors">Datenschutz</a>
            <a href="#" className="text-[#6B6860] hover:text-foreground transition-colors">AGB</a>
          </div>
          <div className="flex flex-col gap-3 font-label text-sm">
            <h4 className="font-bold text-foreground mb-2">Bikes</h4>
            <a href="#" className="text-[#6B6860] hover:text-foreground transition-colors">Road</a>
            <a href="#" className="text-[#6B6860] hover:text-foreground transition-colors">Gravel</a>
            <a href="#" className="text-[#6B6860] hover:text-foreground transition-colors">E-Bikes</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#C8C3B6] gap-4 text-xs font-label text-[#6B6860]">
        <p>© 2026 esel.</p>
        <div className="flex gap-4 md:hidden">
            <a href="#" className="hover:text-foreground">Impressum</a>
            <a href="#" className="hover:text-foreground">Datenschutz</a>
            <a href="#" className="hover:text-foreground">AGB</a>
        </div>
      </div>
    </footer>
  );
}
