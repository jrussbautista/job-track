import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { APP_TITLE } from 'app/constants';
import Drawer from './Drawer';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.common.white,
}));

const AppBarContainer = styled('div')({
  flexGrow: 1,
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const LogoImage = styled('img')({
  width: 40,
  marginRight: 10,
});

const RightContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 1,
});

const ButtonLink = styled(Button)({
  marginRight: 20,
  display: 'block',
});

const LinksContainer = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <AppBarContainer>
        <StyledAppBar position="static" elevation={0} color="default">
          <Toolbar>
            <LogoContainer>
              <LogoImage src="/logo.svg" />
              <Typography variant="h6" color="primary">
                {APP_TITLE}
              </Typography>
            </LogoContainer>

            <RightContainer>
              <LinksContainer>
                <ButtonLink color="inherit">Sign Up</ButtonLink>
                <Button
                  onClick={() => navigate('/sign-in')}
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Sign In
                </Button>
              </LinksContainer>

              <MenuButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open menu"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </MenuButton>
            </RightContainer>
          </Toolbar>
        </StyledAppBar>
      </AppBarContainer>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}

export default Navbar;
