import { Camera, Utensils, MapPin, Sparkles, Music, PartyPopper, Gift, Palette } from 'lucide-react';
import './CustomerStyles.css';

export default function CustomerCategories() {
  const categories = [
    { name: 'Catering', desc: 'Premium food & dining', icon: <Utensils size={32} />, bg: '#fff7ed', color: '#ea580c' },
    { name: 'Photography', desc: 'Capture your moments', icon: <Camera size={32} />, bg: '#eff6ff', color: '#2563eb' },
    { name: 'Makeup Artists', desc: 'Bridal & party styling', icon: <Palette size={32} />, bg: '#fdf2f8', color: '#db2777' },
    { name: 'Event Decor', desc: 'Beautiful venue setups', icon: <Sparkles size={32} />, bg: '#fffbeb', color: '#FFD600' },
    { name: 'Venues', desc: 'Halls, lawns & resorts', icon: <MapPin size={32} />, bg: '#ecfdf5', color: '#059669' },
    { name: 'DJs & Entertainment', desc: 'Music & live bands', icon: <Music size={32} />, bg: '#eef2ff', color: '#4f46e5' },
    { name: 'Mehendi Artists', desc: 'Traditional & modern', icon: <PartyPopper size={32} />, bg: '#fef2f2', color: '#dc2626' },
    { name: 'Gift Services', desc: 'Personalized event gifts', icon: <Gift size={32} />, bg: '#fefce8', color: '#ca8a04' }
  ];

  return (
    <section id="categories" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Explore Event Categories</h2>
            <p className="section-desc">Find top-rated professionals for every detail of your special day.</p>
          </div>
        </div>

        <div className="cat-grid">
          {categories.map((category, index) => (
            <a href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="cat-card">
              <div className="cat-icon" style={{backgroundColor: category.bg, color: category.color}}>
                {category.icon}
              </div>
              <h3 className="cat-name">{category.name}</h3>
              <p className="cat-desc">{category.desc}</p>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            background: 'white', 
            color: '#666', 
            padding: '12px 24px', 
            borderRadius: '50px', 
            fontWeight: 600,
            border: '2px dashed #eaeaea',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
          }}>
            <span>More categories coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
