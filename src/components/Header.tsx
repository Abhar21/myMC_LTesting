import './Header.css';

export default function Header() {
  return (
    <header className="header" aria-label="Main Navigation">
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
          {/* Change the src below to your responsive logo path (e.g. "/Pink.svg") */}
          <img
            src="/Pink.svg"
            alt="myMOOMENT Logo Mobile"
            className="header__logo-img header__logo-img--mobile"
          />
        </div>

        {/* PARTNER ACCESS */}
        <div className="header__partner">
          <a href="#" className="header__partner-link">
            Partner Access <span className="header__partner-arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
