import Header from './components/Header.tsx';
import OfferSection from './components/OfferSection.tsx';
import './components/Responsive.css';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <OfferSection />
      </main>

    </div>
  );
}
