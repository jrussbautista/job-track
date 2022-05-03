import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    padding: '100px 0',
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: 32,
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

const HeadingSub = styled(Typography)(({ theme }) => ({
  marginBottom: 32,
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

const IllustrationContainer = styled('div')({
  textAlign: 'center',
});

const Illustration = styled('img')({
  width: 300,
});

function Hero() {
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} lg={6}>
          <Heading variant="h5" sx={{ mb: 4 }}>
            Having trouble tracking your job applications?
          </Heading>
          <HeadingSub variant="h6" fontWeight="400">
            Keeping track of all your job applications is hard. JobTrack makes this process easy for
            you.
          </HeadingSub>
          <div>
            <Button variant="contained" disableElevation size="large">
              Get Started for free
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <IllustrationContainer>
            <Illustration src="/images/search-job.svg" alt="Search job" />
          </IllustrationContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
