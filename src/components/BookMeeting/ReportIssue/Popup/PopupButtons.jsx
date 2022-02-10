import { DialogActions, Button, Typography } from '@mui/material';

const PopupButtons = ({ handleClose }) => {
  return (
    <DialogActions>
      <Button onClick={handleClose}>
        <Typography color="#e91e63" component="span">
          Cancel
        </Typography>
      </Button>
      <Button onClick={handleClose}>
        <Typography color="#c8c8c8" component="span">
          Report
        </Typography>
      </Button>
    </DialogActions>
  );
};

export default PopupButtons;
