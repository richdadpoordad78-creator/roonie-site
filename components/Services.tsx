
import React from 'react';
import { SERVICES } from '../constants';
import { SectionId } from '../types';
import { useSound } from '../hooks/useSound';

const Services: React.FC = () => {
  const { playWaterDrop } = useSound();

  return (
    <section id={SectionId.Services} className="py-24 md:py-40 bg-black overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-32 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
               <div className="h-px w-8 md:w-12 bg-white/20"></div>
               <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-zinc-600">Service Selection</span>
            </div>
            <h3 className="font-cinzel text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white">Elite Craft</h3>
          </div>
          <p className="text-zinc-500 font-light leading-relaxed max-w-sm italic text-base md:text-lg md:text-right">
            "We redefine the logistics of travel into a seamless extension of your lifestyle."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              onMouseEnter={playWaterDrop}
              className="p-10 md:p-14 bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group relative flex flex-col justify-between overflow-hidden gpu animate-in fade-in slide-in-from-bottom-6"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="absolute top-0 right-0 p-8 md:p-12 text-white/5 group-hover:text-white/10 group-hover:scale-125 transition-transform duration-700 transform -rotate-12 pointer-events-none">
                {service.icon}
              </div>
              
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-xl md:rounded-2xl mb-8 md:mb-12 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 shadow-xl">
                  {service.icon}
                </div>
                <h4 className="font-cinzel text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-widest uppercase transition-all duration-500">
                  {service.title}
                </h4>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed group-hover:text-zinc-200 transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-12 md:mt-16 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-700 group-hover:text-white transition-all duration-300">
                <span className="group-hover:translate-x-1 transition-transform">Inquire</span>
                <div className="h-px flex-1 bg-white/5 group-hover:bg-white/20 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
