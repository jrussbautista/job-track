import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PricingCard from './PricingCard';

const Container = styled('div')({
  marginBottom: 100,
});

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 20,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 60,
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

function PricingSection() {
  return (
    <Container>
      <Title variant="h5">JobTrack is always free.</Title>
      <SubTitle variant="h6">Find a plan that is right for you.</SubTitle>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <PricingCard
            title="Free"
            description="Limited to up to 50 job applications."
            pricing={
              <span>
                <Typography display="inline" variant="h4">
                  $0
                </Typography>
                <Typography display="inline"> / month</Typography>
              </span>
            }
          >
            <Button variant="contained" color="primary" size="large" disableElevation>
              Try it now
            </Button>
          </PricingCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <PricingCard
            title="Premium"
            description="Limited to up to 50 job applications."
            isHighlighted
            pricing={
              <span>
                <Typography display="inline" variant="h4">
                  $5
                </Typography>
                <Typography display="inline"> / month</Typography>
              </span>
            }
          >
            <Button size="large" variant="outlined" color="inherit" disableElevation>
              Go Premium
            </Button>
          </PricingCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PricingSection;
