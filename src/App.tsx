
import CustomerHeader from './components/CustomerHeader';
import CustomerHero from './components/CustomerHero';
import CustomerCategories from './components/CustomerCategories';
import CustomerSections from './components/CustomerSections';
import CustomerFooter from './components/CustomerFooter';
import './index.css';

export default function App() {
  return (
    <div style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
      <CustomerHeader />
      <main>
        <CustomerHero />
        <CustomerCategories />
        <CustomerSections />
      </main>
      <CustomerFooter />
    </div>
  );
}
