
import { useCallback } from 'react';

export const useSound = () => {
  const playCarSound = useCallback(() => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Synthesis of a sophisticated high-end car remote "chirp"
      // This creates a clean, short, professional electronic beep characteristic of luxury car security systems
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      // Starting slightly higher and sliding down creates that signature "electronic" chirp feel
      osc.frequency.setValueAtTime(2200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1800, audioCtx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {
      console.warn("Audio context failed to start", e);
    }
  }, []);

  return { playWaterDrop: playCarSound }; // Re-export as the same name used throughout the app
};
