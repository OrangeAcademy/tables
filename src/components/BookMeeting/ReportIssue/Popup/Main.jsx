// MUI Imports
import { Dialog, DialogContent } from '@mui/material';

//Local Imports
import PopupTitle from './PopupPartials/Title';
import PopupButtons from './PopupPartials/Buttons';
import PopupFormFields from './FormUI/Main';

// This is the main component, creates a popup with a form
// for reporting issues with the app (or smth. else)
const ReportIssuePopup = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
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
