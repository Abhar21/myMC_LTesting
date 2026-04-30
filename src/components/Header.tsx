import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-is-open');
    } else {
      document.body.classList.remove('menu-is-open');
    }
    return () => document.body.classList.remove('menu-is-open');
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`} aria-label="Main Navigation">
      <div className="header__container">
        {/* LOGO IMAGE CONTAINER */}
        <div className="header__logo">
          {/* DESKTOP LOGO */}
          <img
            src="/Pink.svg"
            alt="myMOOMENT Logo Desktop"
            className="header__logo-img header__logo-img--desktop"
          />
          {/* MOBILE LOGO PLACEHOLDER */}
          <img
            src="/Pink.svg"
            alt="myMOOMENT Logo Mobile"
            className="header__logo-img header__logo-img--mobile"
          />
        </div>

        <div className="header__menu">
          <button 
            className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--active' : ''}`} 
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </button>
        </div>
      </div>

      {/* ── TOP-DOWN MENU OVERLAY ── */}
      <div className={`header__overlay ${isMenuOpen ? 'header__overlay--visible' : ''}`}>
        <div className="header__overlay-content">
          <nav className="header__overlay-nav">
            <a href="#" className="header__overlay-link">Privacy Policy</a>
            <a href="#" className="header__overlay-link">Terms & Conditions</a>
            <a href="#" className="header__overlay-link">Refund Policy</a>
            <a href="#" className="header__overlay-link">Contact Us</a>
            <a href="#" className="header__overlay-link">About Us</a>
            <a href="#" className="header__overlay-link header__overlay-link--primary">Register Partner Early Access</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
