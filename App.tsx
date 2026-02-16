
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-100 selection:text-black">
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <main>
            <Hero />
            <div className="relative">
              {/* Subtle transition between sections */}
              <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-transparent to-transparent z-20 pointer-events-none"></div>
              <Services />
              <Fleet />
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
