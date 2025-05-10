import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
