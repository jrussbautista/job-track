import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  ['a']: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
}));

function Footer() {
  return (
    <StyledFooter>
      <p> Copyright 2021 © JobTrack </p>
      <p>
        Made with Love by <a href="https://github.com/jrussumbrella">James Russel C. Bautista</a>
      </p>
    </StyledFooter>
  );
}

export default Footer;
