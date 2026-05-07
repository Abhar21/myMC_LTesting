import { Shield, Clock, Users, Search, CalendarCheck, PartyPopper } from 'lucide-react';
import './CustomerStyles.css';

export default function CustomerSections() {


  return (
    <div>
      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title">How myMooment Works</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '700px' }}>Planning your perfect event in 3 simple steps. No endless calls, no stress —<br />just seamless bookings.</p>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '89px', left: '15%', right: '15%', height: '2px', background: 'linear-gradient(90deg, #dbeafe 0%, #fbcfe8 50%, #dbeafe 100%)', zIndex: 1 }} className="desktop-line"></div>
            <style>{`
              @media (max-width: 767px) { .desktop-line { display: none !important; } }
            `}</style>

            <div className="steps-grid" style={{ position: 'relative', zIndex: 2 }}>
              <div className="step-item" style={{ background: 'transparent' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#2563eb', marginBottom: '15px', letterSpacing: '2px' }}>01</span>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#eff6ff', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', color: '#2563eb' }}>
                  <Search size={32} />
                </div>
                <h3 className="f-title" style={{ fontSize: '18px', fontWeight: 800 }}>Browse & Discover</h3>
                <p className="f-desc" style={{ fontSize: '14px', lineHeight: 1.6 }}>Explore hundreds of verified vendors across. Filter by location, budget, and ratings.</p>
              </div>

              <div className="step-item" style={{ background: 'transparent' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#2563eb', marginBottom: '15px', letterSpacing: '2px' }}>02</span>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#eff6ff', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', color: '#2563eb' }}>
                  <CalendarCheck size={32} />
                </div>
                <h3 className="f-title" style={{ fontSize: '18px', fontWeight: 800 }}>Compare & Book</h3>
                <p className="f-desc" style={{ fontSize: '14px', lineHeight: 1.6 }}>View, Review and Book instantly with secure payment options.</p>
              </div>

              <div className="step-item" style={{ background: 'transparent' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#2563eb', marginBottom: '15px', letterSpacing: '2px' }}>03</span>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#eff6ff', border: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', color: '#2563eb' }}>
                  <PartyPopper size={32} />
                </div>
                <h3 className="f-title" style={{ fontSize: '18px', fontWeight: 800 }}>Celebrate!</h3>
                <p className="f-desc" style={{ fontSize: '14px', lineHeight: 1.6 }}>Sit back and enjoy your event. We handle the coordination so you can focus on making memories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section section-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Features</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>We take the stress out of event planning with a trustworthy, transparent, and seamless booking experience.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="f-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><Users size={28} /></div>
              <h3 className="f-title">Verified Partners</h3>
              <p className="f-desc">Trusted professionals for every event.</p>
            </div>
            <div className="feature-card">
              <div className="f-icon" style={{ background: '#ecfdf5', color: '#059669' }}><Clock size={28} /></div>
              <h3 className="f-title">Instant Booking</h3>
              <p className="f-desc">Book directly without endless calls.</p>
            </div>
            <div className="feature-card">
              <div className="f-icon" style={{ background: '#ecfdf5', color: '#059669' }}><Shield size={28} /></div>
              <h3 className="f-title">Secure Payments</h3>
              <p className="f-desc">Protected and transparent payment process.</p>
            </div>
            <div className="feature-card">
              <div className="f-icon" style={{ background: '#fff7ed', color: '#ea580c' }}><PartyPopper size={28} /></div>
              <h3 className="f-title">All in One Place</h3>
              <p className="f-desc">Everything needed for your celebration all in 1 place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP CTA */}
      <section className="section">
        <div className="container">
          <div className="app-banner">
            <div className="app-content">
              <h2 className="app-title">Plan your next celebration with myMooment</h2>
              <p className="app-desc">Download our app to discover Partners, manage your bookings, and get exclusive app-only offers.</p>
              <div className="store-btns">
                <button className="store-btn">
                  <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '10px', color: '#ccc', lineHeight: 1 }}>Download on the</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1, marginTop: '2px' }}>App Store</div>
                  </div>
                </button>
                <button className="store-btn">
                  <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '10px', color: '#ccc', lineHeight: 1 }}>GET IT ON</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1, marginTop: '2px' }}>Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="qr-container" style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                background: 'white',
                padding: '20px',
                borderRadius: '32px',
                width: '240px',
                height: '240px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
              }}>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://mymooment.com"
                  alt="QR Code"
                  style={{
                    width: '100%',
                    height: '100%',
                    filter: 'blur(6px)',
                    opacity: 0.55
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.9)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontSize: '16px',
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.7)',
                  zIndex: 10
                }}>
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
