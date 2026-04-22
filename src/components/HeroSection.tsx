import './HeroSection.css';

/**
 * HeroSection
 * Ultra-minimalist state: Pure Black Background.
 */
export default function HeroSection() {
  return (
    <section className="hero" id="hero-section" aria-label="Hero Section">
      {/* ── GHOST CARDS DESCENT ── */}
      <div className="hero__ghost-cards">
        <div className="hero__ghost-card hero__ghost-card--1">
          <div className="hero__ghost-img-wrapper" style={{ backgroundImage: 'url(/Carter.avif)' }}></div>
        </div>
        <div className="hero__ghost-card hero__ghost-card--2">
          <div className="hero__ghost-img-wrapper" style={{ backgroundImage: 'url(/Photography.avif)' }}></div>
        </div>
        <div className="hero__ghost-card hero__ghost-card--3">
          <div className="hero__ghost-img-wrapper" style={{ backgroundImage: 'url(/Makeup.avif)' }}></div>
        </div>
        <div className="hero__ghost-card hero__ghost-card--4">
          <div className="hero__ghost-img-wrapper" style={{ backgroundImage: 'url(/Decor.avif)' }}></div>
        </div>
        <div className="hero__ghost-card hero__ghost-card--5">
          <div className="hero__ghost-img-wrapper" style={{ backgroundImage: 'url(/Venue.avif)' }}></div>
        </div>
        <div className="hero__ghost-card hero__ghost-card--6">
          <div className="hero__ghost-img-wrapper" style={{ backgroundImage: 'url(/Mehendi.avif)' }}></div>
        </div>
      </div>

      {/* ── ATMOSPHERIC DEPTH ELEMENTS ── */}
      <div className="hero__depth-elements">
        <div className="hero__depth-blob hero__depth-blob--1"></div>
        <div className="hero__depth-blob hero__depth-blob--2"></div>
        <div className="hero__depth-blob hero__depth-blob--3"></div>
      </div>

      <div className="hero__content">
        <div className="hero__headline-container">
          <p className="hero__eyebrow">
            INDIA'S #1 Direct Booking Event Platform
          </p>
          <h1 className="hero__headline">
            Others ask you to Call,<br />
            <span className="hero__headline-second">
              We let you
              <span className="hero__strike-wrapper">
                <span className="hero__strike-text">CALL</span>
                <span className="hero__strike-line"></span>
              </span>
              <span className="hero__book-wrapper">
                <span className="hero__book-text">BOOK</span>
                <span className="hero__book-glow"></span>
                <span className="hero__book-ripple"></span>
              </span>
            </span>
          </h1>

          <div className="hero__location-info">
            <span className="hero__location-label">Coming Soon Cities & States</span>
            <div className="hero__location-list">
              <span>Bengaluru · Hyderabad · Chennai · Andhra Pradesh · &More</span>
            </div>
          </div>

          <div className="hero__app-status">
            <div className="hero__app-group hero__app-group--pre">
              <span className="hero__app-label">Pre-Registration Opens on</span>
              <div className="hero__app-badges">
                <div className="hero__app-badge hero__app-badge--google">
                  <img src="/220782.png" alt="Play Store" />
                  <span>Play Store</span>
                </div>
              </div>
            </div>

            <div className="hero__app-group">
              <span className="hero__app-label">Coming Soon on</span>
              <div className="hero__app-badges">
                <div className="hero__app-badge hero__app-badge--apple">
                  <img src="/747.png" alt="App Store" />
                  <span>App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="hero__scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
