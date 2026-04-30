import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import OfferSection from './components/OfferSection.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import './components/Responsive.css';
import './index.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 4.5 seconds allows the mandala and logo animations to fully 'bloom'
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Loading Screen Overlay */}
      {isLoading && <LoadingScreen />}
      
      {/* Main Content with fade-in transition */}
      <div className={`main-layout ${isLoading ? 'main-layout--hidden' : 'main-layout--visible'}`}>
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <OfferSection />
        </main>
      </div>

      <style>{`
        .main-layout {
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .main-layout--hidden {
          opacity: 0;
          transform: scale(0.98);
          pointer-events: none;
        }
        .main-layout--visible {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
}
