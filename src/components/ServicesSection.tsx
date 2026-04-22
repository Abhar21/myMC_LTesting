import { useState, useEffect, useRef } from 'react';
import './ServicesSection.css';

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
    description: 'From intimate gatherings to grand feasts',
    color: 'rgba(255, 120, 80, 0.08)', // Warm apricot
    image: '/Carter.avif'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capture every moment beautifully',
    color: 'rgba(80, 160, 255, 0.08)', // Soft sky
    image: '/Photography.avif'
  },
  {
    id: 'makeup',
    title: 'Makeup',
    description: 'Look your best for every moment',
    color: 'rgba(255, 80, 160, 0.08)', // Blush pink
    image: '/Makeup.avif'
  },
  {
    id: 'decor',
    title: 'Decor',
    description: 'Transform spaces into experiences',
    color: 'rgba(120, 255, 180, 0.08)', // Mint glass
    image: '/Decor.avif'
  },
  {
    id: 'venues',
    title: 'Venues',
    description: 'Find the perfect place for your event',
    color: 'rgba(180, 120, 255, 0.08)', // Dreamy lavender
    image: '/Venue.avif'
  },
  {
    id: 'mehendi',
    title: 'Mehendi',
    description: 'Celebrate with intricate, timeless art',
    color: 'rgba(255, 200, 80, 0.08)', // Golden sand
    image: '/Mehendi.avif'
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % SERVICES.length);
      }, 2500); // 2.5s Stay duration
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isHovered]);

  return (
    <section className="services" id="services-section">
      <div className="services__container">
        <div className="services__header">
          <span className="services__eyebrow">Directly Bookable Services</span>
          <h2 className="services__title">Elevate Your Event</h2>
        </div>

        <div 
          className="services__cards"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {SERVICES.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={service.id}
                className={`service-card ${isActive ? 'service-card--active' : ''}`}
                onClick={() => setActiveIndex(index)}
                style={{ '--accent-color': service.color } as React.CSSProperties}
              >
                <div className="service-card__content">
                  <div className="service-card__main">
                    <span className="service-card__number">0{index + 1}</span>
                    <h3 className="service-card__title">{service.title}</h3>
                  </div>

                  <div className="service-card__details">
                    <p className="service-card__description">{service.description}</p>
                  </div>
                </div>
                
                {/* Visual Depth Elements */}
                <div className="service-card__image" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="service-card__bg"></div>
                <div className="service-card__glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
