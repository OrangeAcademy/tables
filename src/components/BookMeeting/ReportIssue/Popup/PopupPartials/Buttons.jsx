// MUI Imports
import { DialogActions, Button, Typography } from '@mui/material';

// Styles
const buttonStyles = {
  cancel: { color: '#e91e63' },
  report: { color: '#c8c8c8' },
};

// Buttons for closing the popup
// P.S. The report button should eventually process the form data and send it to the server
const PopupButtons = ({ handleClose }) => {
  return (
    <DialogActions>
      <Button onClick={handleClose}>
        <Typography color={buttonStyles.cancel} component="span">
          Cancel
        </Typography>
      </Button>
      <Button onClick={handleClose}>
        <Typography color={buttonStyles.report} component="span">
          Report
        </Typography>
      </Button>
    </DialogActions>
  );
};

export default PopupButtons;
