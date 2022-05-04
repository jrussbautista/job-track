import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    padding: '60px 0',
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 60,
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

const Item = styled('div')({
  textAlign: 'center',
});

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

type Offer = {
  title: string;
  description: string;
  image: string;
};

const offers: Offer[] = [
  {
    title: 'Easy to use',
    description:
      'This tool will help you to make your job application easy to manage. We provide an easy to use dashboard for you.',
    image: '/images/offer_image_1.svg',
  },
  {
    title: 'Organize environment',
    description:
      'Organize your job application. Add, edit and delete job applications. We will help you to monitor your job application easily',
    image: '/images/offer_image_2.svg',
  },
];

function OfferSection() {
  return (
    <Container>
      <Heading variant="h5">What We Can offer</Heading>
      <Grid container spacing={8}>
        {offers.map((offer) => (
          <Grid item xs={12} md={6} key={offer.title}>
            <Item>
              <Title variant="h6">{offer.title}</Title>
              <img src={offer.image} width="240" height="240" />
              <Typography variant="body1">{offer.description}</Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OfferSection;
