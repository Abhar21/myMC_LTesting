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
    image: '/Decor.avif'
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

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
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
      <div className="offer-banner">
        <span>INDIA'S #1 Direct Booking Event Platform</span>
        <a href="#">Get Early Access →</a>
      </div>

      <section className="carousel-stage" id="offer-section">
        <div className="carousel-stage__header">
          <h1 className="carousel-stage__headline">
            Others ask you to Call,<br />
            <span className="carousel-stage__headline-accent">We let you BOOK</span>
          </h1>
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
                    <div className="carousel-card__image" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className="carousel-card__overlay" />
                    <div className="carousel-card__content">
                      <h3 className="carousel-card__title">{service.title}</h3>
                      <p className="carousel-card__description">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-nav">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${activeIndex % SERVICES.length === i ? 'carousel-dot--active' : ''}`}
              onClick={() => {
                // Jump to the middle set's version of this dot
                setIsTransitioning(true);
                setActiveIndex(OFFSET + i);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
