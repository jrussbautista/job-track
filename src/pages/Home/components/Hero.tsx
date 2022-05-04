import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  textAlign: 'center',
  padding: '60px 0',
});

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: 32,
  fontWeight: 500,
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

const HeadingSub = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

const IllustrationContainer = styled('div')({
  textAlign: 'center',
  margin: '100px 0',
});

const Illustration = styled('img')({
  width: 300,
});

const StyledButton = styled(Button)({
  marginTop: 60,
});

function Hero() {
  return (
    <Container>
      <Heading variant="h5" sx={{ mb: 4 }}>
        Having trouble tracking your job applications?
      </Heading>
      <HeadingSub variant="h6" fontWeight="400">
        Keeping track of all your job applications is hard.
      </HeadingSub>
      <HeadingSub variant="h6" fontWeight="400">
        JobTrack makes this process easy for you.
      </HeadingSub>

      <StyledButton variant="contained" disableElevation size="large">
        Get Started for free
      </StyledButton>

      <IllustrationContainer>
        <Illustration src="/images/search-job.svg" alt="Search job" />
      </IllustrationContainer>
    </Container>
  );
}

export default Hero;
