import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import Stats from './sections/Stats';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import HowItWorks from './sections/HowItWorks';
import Team from './sections/Team';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Marquee dark />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Marquee />
      <Team />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
