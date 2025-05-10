import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Services />
    </div>
  );
}

export default App;
