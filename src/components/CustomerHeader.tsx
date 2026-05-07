import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './CustomerStyles.css';

export default function CustomerHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollPos > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`customer-header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-text">
          myMooment
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#features" className="nav-link">Features</a>
        </nav>

        {/* Desktop Actions */}
        <div className="desktop-actions">
          <button className="btn-primary">
            Become a Partner
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#categories" className="nav-link" style={{padding: '10px 0', borderBottom: '1px solid #f0f0f0'}}>Categories</a>
          <a href="#how-it-works" className="nav-link" style={{padding: '10px 0', borderBottom: '1px solid #f0f0f0'}}>How It Works</a>
          <a href="#features" className="nav-link" style={{padding: '10px 0', borderBottom: '1px solid #f0f0f0'}}>Features</a>
          <button className="btn-primary" style={{width: '100%', justifyContent: 'center', marginTop: '10px'}}>
            Become a Partner
          </button>
        </div>
      )}
    </header>
  );
}
