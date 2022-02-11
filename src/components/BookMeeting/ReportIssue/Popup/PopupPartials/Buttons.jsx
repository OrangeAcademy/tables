// MUI Imports
import { DialogActions, Button, Typography } from '@mui/material';

// Buttons for closing the popup
// P.S. The report button should eventually process the form data and send it to the server
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
