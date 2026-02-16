
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { SectionId } from '../types';
import { useSound } from '../hooks/useSound';

const Contact: React.FC = () => {
  const { playWaterDrop } = useSound();

  const handleWhatsApp = () => {
    playWaterDrop();
    const message = "Hi Ronnie, I'm interested in booking a private transport service. Could you please provide more information?";
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const contactItems = [
    { 
      title: "Direct WhatsApp", 
      desc: "Fastest response. Secure, end-to-end encrypted dispatch channel for all immediate North Dallas bookings.", 
      buttonLabel: "Open WhatsApp", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      ), 
      handler: handleWhatsApp, 
      link: null,
      primary: true
    },
    { 
      title: "Voice Priority", 
      desc: "24/7 Priority support line. Best for immediate arrivals or complex logistics coordination.", 
      buttonLabel: CONTACT_INFO.phone, 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ), 
      handler: playWaterDrop, 
      link: `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}` 
    },
    { 
      title: "Email Inquiry", 
      desc: "Best for advanced bookings, business accounts, or detailed quote requests for the Celebration Fleet.", 
      buttonLabel: "Send Email", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ), 
      handler: playWaterDrop, 
      link: `mailto:${CONTACT_INFO.email}` 
    }
  ];

  return (
    <section id={SectionId.Booking} className="py-40 bg-black relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
             </span>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">Service Status: Online</span>
          </div>
          <h2 className="font-cinzel text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">Get In Touch</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Select your preferred method of contact below. Our elite dispatch team is active 24/7 for all North Dallas requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, idx) => {
            const isButton = !item.link;
            const Component = isButton ? 'div' : 'a';
            
            return (
              <div 
                key={idx}
                className={`group relative flex flex-col p-10 bg-zinc-950/50 border ${item.primary ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.02)]' : 'border-white/5'} rounded-3xl transition-all duration-500 hover:border-white/40 hover:bg-zinc-900/50`}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="font-cinzel text-2xl font-bold mb-4 tracking-widest uppercase text-white">{item.title}</h3>
                <p className="text-zinc-500 mb-12 text-sm font-light leading-relaxed min-h-[4rem]">
                  {item.desc}
                </p>

                {/* The "Findable" Button */}
                {isButton ? (
                  <button 
                    onClick={item.handler}
                    className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98] shadow-lg"
                  >
                    {item.buttonLabel}
                  </button>
                ) : (
                  <a 
                    href={item.link}
                    onClick={item.handler}
                    className="w-full py-5 border border-white/20 bg-white/5 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-center shadow-lg"
                  >
                    {item.buttonLabel}
                  </a>
                )}

                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ring-1 ring-white/20"></div>
              </div>
            );
          })}
        </div>

        {/* Areas of Operation Footer */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6">
           {['Frisco', 'Plano', 'McKinney', 'Prosper', 'Allen', 'Richardson', 'Dallas'].map(city => (
             <div key={city} className="flex items-center gap-3 group cursor-default">
               <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-white transition-colors"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 group-hover:text-white transition-colors">{city}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
