
import React, { useEffect, useRef } from 'react';
import { SectionId } from '../types';
import { useSound } from '../hooks/useSound';

const Hero: React.FC = () => {
  const { playWaterDrop } = useSound();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = (id: string) => {
    playWaterDrop();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      id={SectionId.Home} 
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-black py-20 px-4"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-grid-white pointer-events-none opacity-40"></div>
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none gpu">
        <img 
          src="https://images.unsplash.com/photo-1614200187074-43126224575b?q=80&w=2560&auto=format&fit=crop" 
          alt="" 
          loading="eager"
          className="w-full h-full object-cover grayscale brightness-50 contrast-125 mix-blend-lighten"
        />
      </div>

      {/* Optimized Spotlight using CSS variable */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none gpu"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08) 0%, transparent 60%)`,
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[50rem] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none gpu opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <div className="mb-8 md:mb-12 animate-in fade-in slide-in-from-top-4 duration-1000 group">
           <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1 md:px-4 md:py-1.5 rounded-full glass-morphism border border-white/10 group-hover:border-white/20 transition-all cursor-default">
              <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/60">North Dallas Private Concierge</span>
           </div>
        </div>

        <div className="mb-4 overflow-hidden">
           <span className="font-cinzel text-[10px] sm:text-xs tracking-[1em] md:tracking-[1.5em] text-white/30 uppercase font-light block animate-in fade-in duration-[2000ms]">
              Ronnie Aslani
           </span>
        </div>

        <div className="relative mb-8 md:mb-12 select-none">
          <div className="hidden md:block absolute -inset-x-20 top-0 text-[10rem] sm:text-[18rem] md:text-[22rem] font-cinzel font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap pointer-events-none translate-y-1/2 gpu">
            Luxury
          </div>
          
          <h1 className="relative font-cinzel text-huge sm:text-7xl md:text-[9.5rem] font-bold leading-[0.9] tracking-[-0.05em] text-white animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out text-glow">
            Absolute <br />
            <span className="italic font-light opacity-40 text-[0.85em] tracking-tighter">Discretion.</span>
          </h1>
        </div>
        
        <p className="text-zinc-500 text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-12 md:mb-16 px-4 animate-in fade-in slide-in-from-bottom-8 duration-[1000ms] delay-300">
         Private transport service operated by Ronnie Aslani providing luxury rides across North Dallas.
Available 24/7 for airport transfers, private trips, and event transportation.
Our fleet includes premium SUVs and party buses ensuring safe, reliable, and punctual service.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 animate-in fade-in slide-in-from-bottom-6 duration-[1200ms] delay-500">
          <button 
            onClick={() => handleClick(SectionId.Booking)}
            className="group relative flex items-center gap-6 md:gap-8 px-10 py-5 md:px-14 md:py-7 bg-white text-black text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-xl"
          >
            Dispatch Elite
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-black/5 group-hover:bg-black group-hover:text-white transition-all duration-300">
               <span className="text-lg translate-x-0.5 -translate-y-0.5">↗</span>
            </div>
          </button>
          
          <button 
            onClick={() => handleClick(SectionId.Fleet)}
            className="group flex items-center gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/30 hover:text-white transition-all duration-300"
          >
            Explore Fleet
            <div className="w-8 h-[1px] md:w-12 bg-white/10 group-hover:w-16 md:group-hover:w-20 group-hover:bg-white transition-all duration-300"></div>
          </button>
        </div>
      </div>

      {/* Desktop HUD Elements */}
      <div className="absolute bottom-16 left-12 hidden xl:flex flex-col gap-8 animate-in fade-in duration-1000 delay-700">
         <div className="flex flex-col border-l border-white/10 pl-6 py-1">
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">Operational Range</span>
            <span className="text-xs font-medium text-white/60 tracking-widest uppercase">North Dallas Corridor</span>
         </div>
         <div className="flex flex-col border-l border-white/10 pl-6 py-1">
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">Service Window</span>
            <span className="text-xs font-medium text-white/60 tracking-widest uppercase">Immediate / 24 Hour</span>
         </div>
      </div>

      <div className="absolute bottom-16 right-12 hidden xl:flex flex-col gap-8 items-end text-right animate-in fade-in duration-1000 delay-700">
         <div className="flex flex-col border-r border-white/10 pr-6 py-1">
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">Availability</span>
            <div className="flex items-center gap-2 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
              <span className="text-xs font-medium text-white/60 tracking-widest uppercase">Live Dispatch</span>
            </div>
         </div>
         <div className="flex flex-col border-r border-white/10 pr-6 py-1">
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">Average Pickup</span>
            <span className="text-xs font-medium text-white/60 tracking-widest uppercase">&lt; 15 Minutes</span>
         </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => handleClick(SectionId.Services)}
      >
        <div className="w-[1px] h-10 md:h-12 bg-white/10 relative overflow-hidden transition-all duration-300 group-hover:h-16">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
