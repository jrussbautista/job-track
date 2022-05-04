import MUIDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CloseButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

const StyledListItemButton = styled(ListItemButton)({
  justifyContent: 'center',
  textAlign: 'center',
});

type DrawerProps = {
  onClose(): void;
  open: boolean;
};

const Drawer = ({ onClose, open }: DrawerProps) => {
  return (
    <MUIDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: '40%' },
      }}
    >
      <CloseButtonContainer>
        <IconButton aria-label="close menu" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </CloseButtonContainer>
      <List component="nav" aria-labelledby="navigation links">
        <StyledListItemButton>
          <ListItemText primary="SIGN UP" />
        </StyledListItemButton>
        <StyledListItemButton>
          <Button color="primary" variant="contained" disableElevation>
            SIGN IN
          </Button>
        </StyledListItemButton>
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
