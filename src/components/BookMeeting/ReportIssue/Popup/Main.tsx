import React from "react";
// MUI Imports
import { Dialog, DialogContent } from '@mui/material';

//Local Imports
import PopupTitle from './PopupPartials/Title';
import PopupButtons from './PopupPartials/Buttons';
import PopupFormFields from './FormUI/Main';

// Hard-typed props
interface props {
  open: boolean,
  handleClose: Function
}

// This is the main component, creates a popup with a form
// for reporting issues with the app (or smth. else)
const ReportIssuePopup = ({ open, handleClose }: props) => {
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      {/* Popup main body */}
      <DialogContent>
        <PopupTitle />
        <PopupFormFields />
      </DialogContent>

      {/* Popup buttons/ footer */}
      <PopupButtons handleClose={handleClose} />
    </Dialog>
  );
};

export default ReportIssuePopup;
