import { useState, useEffect, useRef } from 'react';
import './OfferSection.css';

interface Service {
  id: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    id: 'catering',
    title: 'Catering',
    description: 'Delicious menus crafted for every occasion.',
    color: 'rgba(255, 120, 80, 0.08)',
    image: '/Carter.avif'
  },
  {
    id: 'mehendi',
    title: 'Mehendi',
    description: 'Beautiful designs that celebrate every moment.',
    color: 'rgba(255, 200, 80, 0.08)',
    image: '/Mehendi.avif'
  },
  {
    id: 'makeup',
    title: 'Makeup',
    description: 'Flawless looks for your special day.',
    color: 'rgba(255, 80, 160, 0.08)',
    image: '/Makeup.avif'
  },
  {
    id: 'decor',
    title: 'Decor',
    description: 'Elegant setups that bring your vision to life.',
    color: 'rgba(120, 255, 180, 0.08)',
    image: '/Decore.avif'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capture memories that last forever.',
    color: 'rgba(80, 160, 255, 0.08)',
    image: '/Photography.avif'
  },
  {
    id: 'venues',
    title: 'Venues',
    description: 'Perfect spaces for unforgettable celebrations.',
    color: 'rgba(180, 120, 255, 0.08)',
    image: '/Venue.avif'
  },
];

// Create a larger virtual list for seamless looping [0..5, 0..5, 0..5]
const VIRTUAL_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];
const OFFSET = SERVICES.length;

export default function OfferSection() {
  // Start at the middle set
  const [activeIndex, setActiveIndex] = useState(OFFSET);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoplayRef = useRef<number | null>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isHovered]);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  // Seamless jump logic
  useEffect(() => {
    // When we transition into the first card of the next set
    if (activeIndex === OFFSET * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Kill transition
        setActiveIndex(OFFSET); // Jump back to middle set version of same card
      }, 1000); // Match transition duration (1s)
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);

    // Only show cards within a certain range for performance and clarity
    const isVisible = absDiff <= 3;

    const translateX = diff * 240; // Wide horizontal spread
    const translateZ = -absDiff * 80;
    const rotateY = diff * -25;
    const scale = 1 - absDiff * 0.12;
    const opacity = isVisible ? 1 - absDiff * 0.25 : 0;
    const blur = absDiff * 0.5;

    const isCorner = absDiff >= 2;
    const cardHeight = isCorner ? 580 : 520;
    const translateY = isCorner ? (580 - 520) / 2 : 0; // Center offset to make it grow downwards only

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      height: `${cardHeight}px`,
      opacity: isVisible ? Math.max(opacity, 0.4) : 0,
      visibility: isVisible ? 'visible' : 'hidden' as any,
      filter: `blur(${blur}px)`,
      zIndex: 100 - absDiff,
      transition: isTransitioning ? 'all 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      pointerEvents: absDiff === 0 ? 'auto' : 'none' as any
    };
  };

  return (
    <>


      <section className="carousel-stage" id="offer-section">
        <div className="carousel-stage__header">
          <p className="hero__eyebrow" style={{ marginBottom: '-0.4rem' }}>
            INDIA'S #1 Direct Booking Event Platform
          </p>
          <h1 className="carousel-stage__headline">
            Others ask you to Call,<br />
            <span className="carousel-stage__headline-accent">We let you <span className="typewriter-text" data-text="Book">Book</span></span>
          </h1>
          <p className="carousel-stage__subline">One tap booking. No calls needed.</p>
          <div className="carousel-stage__app-info">
            <a href="#" className="carousel-stage__app-badge">
              <img src="/220782.png" alt="Play Store" />
              <span>Pre-Register on Play Store</span>
            </a>
            <div className="carousel-stage__app-badge carousel-stage__app-badge--disabled">
              <img src="/747.png" alt="App Store" />
              <span>Coming Soon to App Store</span>
            </div>
          </div>
        </div>

        <div
          className="carousel-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel-container">
            {VIRTUAL_SERVICES.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={`${service.id}-${index}`}
                  className={`carousel-card ${isActive ? 'carousel-card--active' : ''}`}
                  style={getCardStyle(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="carousel-card__inner">
                    <div className="carousel-card__top-badge">
                      {service.title}
                    </div>
                    <div className="carousel-card__image" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className="carousel-card__overlay" />

                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </section>
    </>
  );
}
