import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
}
