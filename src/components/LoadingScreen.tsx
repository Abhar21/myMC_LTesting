import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // We keep the component in the DOM for a bit after the main content is ready
  // to allow for a smooth transition, or we can handle it in App.tsx
  
  return (
    <div className={`loading-screen ${!isVisible ? 'loading-screen--hidden' : ''}`}>
      <div className="loading-screen__bg"></div>
      <div className="loading-screen__content">
        <h1 className="loading-screen__logo">
          my<span className="loading-screen__logo-accent">MOOMENT</span>
        </h1>
        <div className="loading-screen__line"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
