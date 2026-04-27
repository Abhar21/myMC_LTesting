import './Header.css';

export default function Header() {
  return (
    <header className="header" aria-label="Main Navigation">
      <div className="header__container">
        {/* LOGO IMAGE CONTAINER */}
        <div className="header__logo">
          <img
            src="/Pink.svg"
            alt="myMOOMENT Logo"
            className="header__logo-img"
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
