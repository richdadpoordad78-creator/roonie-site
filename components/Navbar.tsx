
import React, { useState, useEffect, useCallback } from 'react';
import { LOGO_URL } from '../constants';
import { SectionId } from '../types';
import { useSound } from '../hooks/useSound';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playWaterDrop } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const handleClick = useCallback((id: string) => {
    playWaterDrop();
    setIsMobileMenuOpen(false);
    
    // Slight delay for menu close animation on mobile
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, isMobileMenuOpen ? 300 : 0);
  }, [playWaterDrop, isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', id: SectionId.Services },
    { name: 'Fleet', id: SectionId.Fleet },
    { name: 'Booking', id: SectionId.Booking },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 px-4 md:px-8 flex justify-center items-center pointer-events-none ${isScrolled ? 'pt-4 md:pt-6' : 'pt-0'}`}
      >
        <div className={`
          w-full max-w-[1400px] flex items-center justify-between transition-all duration-500 pointer-events-auto gpu
          ${isScrolled 
            ? 'py-3 px-5 md:py-4 md:px-8 glass-morphism rounded-full max-w-[900px] shadow-2xl' 
            : 'py-8 md:py-10 bg-transparent'
          }
        `}>
          <div 
            className="cursor-pointer group flex items-center gap-3 md:gap-4" 
            onClick={() => handleClick(SectionId.Home)}
          >
            <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/10 group-hover:border-white/30 transition-all overflow-hidden bg-white/5 flex items-center justify-center">
                <img src={LOGO_URL} alt="" className="w-full h-full object-cover rounded-full p-0.5" />
            </div>
            {!isScrolled && (
              <div className="flex flex-col animate-in fade-in duration-700">
                <span className="font-cinzel text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] text-white">RONNIE ASLANI</span>
                <span className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-white/30 uppercase">Elite Movement</span>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className="text-[9px] md:text-[10px] font-bold text-white/40 hover:text-white transition-all tracking-[0.2em] uppercase py-2"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button 
                onClick={() => handleClick(SectionId.Booking)}
                className={`
                  hidden sm:block transition-all duration-300 active:scale-95
                  ${isScrolled 
                    ? 'px-5 py-2 md:px-6 md:py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200'
                    : 'px-6 py-3 md:px-8 md:py-3.5 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black'
                  }
                `}
            >
                Reserve
            </button>
            
            <button 
                className="md:hidden text-white p-2 glass-morphism rounded-full active:scale-90 transition-transform" 
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
            >
                <div className="w-5 flex flex-col gap-1.5">
                    <div className="h-[1.5px] bg-current w-full"></div>
                    <div className="h-[1.5px] bg-current w-3/4 ml-auto"></div>
                </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Optimized Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center p-8 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <button 
            className="absolute top-8 right-8 p-4 glass-morphism rounded-full active:scale-90" 
            onClick={() => setIsMobileMenuOpen(false)}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
            </svg>
        </button>

        <div className="flex flex-col items-center space-y-10 w-full">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="font-cinzel text-3xl sm:text-4xl font-black tracking-tighter text-white hover:text-zinc-500 transition-colors uppercase w-full text-center py-2"
            >
              {link.name}
            </button>
          ))}
          <button
              onClick={() => handleClick(SectionId.Booking)}
              className="mt-12 w-full max-w-[280px] py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] rounded-full shadow-2xl active:scale-95 transition-transform"
            >
              Contact Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
