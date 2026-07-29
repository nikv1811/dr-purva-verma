import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import Consultation from './components/Consultations';
import FAQ from './components/FAQ';
import ServiceCategoryPage from './components/ServiceCategoryPage';
import ServiceDetailPage from './components/ServiceDetailPage';
// import InstagramPosts from './components/InstagramFeed';
import Testimonial from './components/Testimonial';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      scrollToElement();
      const timer = window.setTimeout(scrollToElement, 50);
      return () => window.clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToHash />
        <main className="pt-16"> {/* Adjust padding based on header height */}
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <About />
                <Services />
                <Consultation />
                <FAQ />
                <Testimonial />
              </>
            } />
            <Route path="/services/:categorySlug" element={<ServiceCategoryPage />} />
            <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
