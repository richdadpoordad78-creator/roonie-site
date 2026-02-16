import React from 'react';
import { VEHICLES } from '../constants';
import { SectionId } from '../types';
import { useSound } from '../hooks/useSound';

const Fleet: React.FC = () => {
  const { playWaterDrop } = useSound();

  return (
    <section id={SectionId.Fleet} className="py-40 bg-black border-t border-white/5 relative">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 block mb-8">Selected Units</span>
            <h2 className="font-cinzel text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-white">The Fleet</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-zinc-400 font-light text-xl italic max-w-sm leading-relaxed border-l border-white/10 pl-8">
              "Every vehicle in our collection is maintained to a standard of absolute excellence."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VEHICLES.map((vehicle) => (
            <div 
              key={vehicle.id}
              onMouseEnter={playWaterDrop}
              className="bg-zinc-900/50 border border-white/10 p-8 transition-all duration-500 hover:border-white/30"
            >
              <div className="aspect-[16/10] overflow-hidden mb-8 bg-zinc-800">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover brightness-75 transition-all duration-700 hover:brightness-100 hover:scale-105"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-wider block mb-2">{vehicle.capacity}</span>
                  <h3 className="font-cinzel text-3xl font-bold text-white">{vehicle.name}</h3>
                </div>
                
                <p className="text-zinc-400 text-base leading-relaxed">
                  {vehicle.description}
                </p>

                <button 
                  onClick={() => document.getElementById(SectionId.Booking)?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-transparent border border-white/20 text-xs font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                >
                  Request Unit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;