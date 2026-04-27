import Header from './components/Header.tsx';
import OfferSection from './components/OfferSection.tsx';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <OfferSection />
      </main>
      <footer className="offer-banner footer-banner">
        <div className="footer-banner__copyright">
          © 2026 myMooment. All rights reserved.
        </div>
        <div className="footer-banner__links">
          <a href="#">Privacy Policy</a>
          <span className="footer-dot">•</span>
          <a href="#">Terms & Conditions</a>
          <span className="footer-dot">•</span>
          <a href="#">Refund Policy</a>
          <span className="footer-dot">•</span>
          <a href="#">Contact Us</a>
          <span className="footer-dot">•</span>
          <a href="#">About Us</a>
        </div>
      </footer>
    </div>
  );
}
