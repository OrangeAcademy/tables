// MUI Imports
import { Dialog, DialogContent } from '@mui/material';

//Local Imports
import PopupTitle from './PopupTitle';
import PopupButtons from './PopupButtons';
import PopupFormFields from './PopupFormFields';

// This is the main component, creates a popup with a form
// for reporting issues with the app (or smth. else)
const ReportIssuePopup = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <PopupTitle />
        <PopupFormFields />
      </DialogContent>

      <PopupButtons handleClose={handleClose} />
    </Dialog>
  );
};

export default ReportIssuePopup;
