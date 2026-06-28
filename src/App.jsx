import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import PageLoader from './components/PageLoader';
import FloatingCTA from './components/FloatingCTA';
import Hero from './sections/Hero';
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
      <PageLoader />
      <CursorGlow />
      <FloatingCTA />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Team />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
