
import React, { useEffect, useState, useRef } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const audioUrl = "https://raw.githubusercontent.com/richdadpoordad78-creator/logo/main/freesound_community-distant-motorbike-90799%20(1).mp3";
    const audio = new Audio(audioUrl);
    audio.volume = 0;
    audio.loop = true;
    audioRef.current = audio;

    const startAudio = () => {
      audio.play().then(() => {
        // Fade in
        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 0.25) {
            vol += 0.01;
            audio.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 50);
      }).catch(() => {});
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);

    // Smooth animation loop for progress
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const nextProgress = Math.min(100, Math.floor(elapsed / 25)); // ~2.5s total load

      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Completion sequence
        setTimeout(() => {
          if (audioRef.current) {
            let vol = audioRef.current.volume;
            const fadeOut = setInterval(() => {
              if (vol > 0.02) {
                vol -= 0.02;
                audioRef.current!.volume = vol;
              } else {
                audioRef.current!.pause();
                clearInterval(fadeOut);
              }
            }, 50);
          }
          setIsExiting(true);
          setTimeout(onLoadingComplete, 1200);
        }, 500);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] overflow-hidden gpu ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute inset-0 z-0 overflow-hidden gpu">
        <img 
          src="https://t4.ftcdn.net/jpg/10/10/80/87/240_F_1010808766_6m0hExld0NL38fEbAtV541V0LS9ClDZY.jpg" 
          alt="" 
          className="hidden md:block w-full h-full object-cover brightness-[0.3] contrast-[1.2] transition-transform duration-[4s] ease-out"
          style={{ transform: `scale(${1.1 + progress * 0.001})`, objectPosition: 'center 40%' }}
        />
        <img 
          src="https://github.com/richdadpoordad78-creator/logo/blob/main/Black%20and%20White%20Simple%20Motivation%20Phone%20Wallpaper.png?raw=true" 
          alt="" 
          className="md:hidden w-full h-full object-cover brightness-[0.3] contrast-[1.2] transition-transform duration-[4s] ease-out"
          style={{ transform: `scale(${1.05 + progress * 0.001})`, objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
      </div>

      {/* Progress */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl tracking-[1em] text-white/80 font-bold mb-6">
            RONNIE ASLANI
          </h2>
          <div className="w-48 sm:w-64 h-[1px] bg-white/10 mx-auto overflow-hidden relative rounded-full">
            <div 
              className="absolute inset-y-0 left-0 bg-white transition-all duration-100 ease-out"
              style={{ width: `${progress}%`, boxShadow: '0 0 10px 1px white' }}
            ></div>
          </div>
        </div>

        <div className="relative w-full max-w-xs aspect-square flex items-center justify-center opacity-20">
           <span className="text-white font-black text-8xl tabular-nums tracking-tighter">{progress.toString().padStart(3, '0')}</span>
        </div>
      </div>

      <div className="absolute bottom-16 left-0 w-full text-center">
         <span className="text-[8px] font-black tracking-[0.6em] text-white/40 uppercase">North Dallas • Secure Transport</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
