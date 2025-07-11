import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import Treatments from './components/Treatements';
import Consultation from './components/Consultations';
// import InstagramPosts from './components/InstagramFeed';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16"> {/* Adjust padding based on header height */}
        <HeroSection />
        <About /> {/* Make sure this has id="about" */}
        <Treatments /> {/* Treatments section */}
        <Services /> {/* Services section */}
        <Consultation />
        <Testimonial />
        {/* <InstagramPosts /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
