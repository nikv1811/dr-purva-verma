import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import Treatments from './components/Treatements';
// import Locations from './components/Locations';
// import OnlineConsultation from './components/OnlineConsultation';
import Consultation from './components/Consultations';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16"> {/* Adjust padding based on header height */}
        <HeroSection />

        <About /> {/* Make sure this has id="about" */}

        <Treatments /> {/* Treatments section */}
        <Services /> {/* Services section */}
        {/* <OnlineConsultation />
        <Locations /> */}
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
