import Container from '@mui/material/Container';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import PricingSection from './components/PricingSection';

function HomePage() {
  return (
    <Container>
      <HeroSection />
      <OfferSection />
      <PricingSection />
    </Container>
  );
}

export default HomePage;
