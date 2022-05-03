import { styled } from '@mui/material/styles';
import Hero from './components/Hero';

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
    </Container>
  );
}

export default HomePage;
