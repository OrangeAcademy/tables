import React from "react";
// MUI Imports
import { DialogActions, Button, Typography } from '@mui/material';
import ResponsiveDialog from "./MY_COMPONENT";

// Styles
const buttonStyles = {
  cancel: { color: '#e91e63' },
  report: { color: '#000080' },
};

// Hard-typed props
interface props {
  handleClose: Function
}

// Buttons at the bottom of the Report issue popup card
// Btns: cancel, report
// P.S. The report button should eventually process the form data and send it to the server
const PopupButtons = ({ handleClose }: props) => {
  return (
    <DialogActions>
      <Button onClick={() => handleClose()}>
        <Typography color={buttonStyles.cancel} component="span">
          Cancel
        </Typography>
      </Button>


     <  ResponsiveDialog />


    </DialogActions>
  );
};

export default PopupButtons;
