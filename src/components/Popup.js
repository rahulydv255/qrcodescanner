import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Popup(props) {  
    const{popupContent,popupTitle,popupButtonTitle, handlePopupBtnClick, ...other} = props;
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
         {popupTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {popupContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupBtnClick} autoFocus>
            {popupButtonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}