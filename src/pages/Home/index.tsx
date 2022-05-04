import { styled } from '@mui/material/styles';
import Hero from './components/Hero';
import Offer from './components/Offer';

const Container = styled('div')(({ theme }) => ({
  padding: 20,
  [theme.breakpoints.up('lg')]: {
    padding: 40,
  },
}));

function HomePage() {
  return (
    <Container>
      <Hero />
      <Offer />
    </Container>
  );
}

export default HomePage;
