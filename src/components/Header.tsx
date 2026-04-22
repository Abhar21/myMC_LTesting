import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for showing the header background
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} aria-label="Main Navigation">
      <div className="header__container">
        {/* LOGO IMAGE CONTAINER */}
        <div className="header__logo">
          <img
            src="/Pink.svg"
            alt="myMOOMENT Logo"
            className="header__logo-img"
          />
        </div>

        {/* CTA */}
        <div className="header__actions">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            <span>Become Partner</span>
            <span className="btn-cta__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
