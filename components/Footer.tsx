
import React from 'react';
import { CONTACT_INFO, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="md:col-span-2">
          <div className="flex items-center mb-10">
            <img src={LOGO_URL} alt="Ronnie Aslani" className="h-14 w-14 rounded-full mr-5 border border-zinc-800 p-0.5 object-cover" />
            <h2 className="font-cinzel text-3xl font-bold tracking-[0.2em] text-white">RONNIE ASLANI</h2>
          </div>
          <p className="text-zinc-500 max-w-sm mb-12 font-light leading-relaxed text-base">
            The standard for discrete, high-end private transportation across the North Dallas corridor. Serving discerning clients 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-wrap gap-8">
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="group flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">Direct Messaging</span>
              <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">WhatsApp Business</span>
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="group flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">Primary Line</span>
              <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.4em] text-[10px] mb-10 text-white/40">Regions</h3>
          <ul className="space-y-6 text-zinc-500 text-xs font-medium tracking-widest uppercase">
            <li className="flex items-center gap-4 group">
              <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-white transition-colors"></span>
              North Dallas
            </li>
            <li className="flex items-center gap-4 group">
              <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-white transition-colors"></span>
              Plano & Frisco
            </li>
            <li className="flex items-center gap-4 group">
              <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-white transition-colors"></span>
              McKinney Luxury
            </li>
            <li className="flex items-center gap-4 group">
              <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-white transition-colors"></span>
              DFW Terminals
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold uppercase tracking-[0.4em] text-[10px] mb-10 text-white/40">Status</h3>
          <p className="text-zinc-500 text-xs mb-8 leading-relaxed font-medium">
            Operational status: <span className="text-green-500 uppercase font-black ml-1">Live 24/7</span>.
            Instant dispatch available for all pre-booked and immediate requests.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] rounded-full text-white">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Dispatch Ready
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-24 pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
            &copy; {new Date().getFullYear()} Ronnie Aslani
          </p>
          <div className="hidden md:block w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
          <a 
            href="https://realamericantechnologies.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row items-center gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Engineered by</span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover:underline decoration-zinc-800 underline-offset-8">Real American Technologies</span>
          </a>
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-700 text-center md:text-right">
          Discrete VIP Transportation Services
        </p>
      </div>
    </footer>
  );
};

export default Footer;
