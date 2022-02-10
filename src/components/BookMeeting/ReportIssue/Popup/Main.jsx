import { Dialog, DialogContent } from '@mui/material';
import PopupTitle from './PopupTitle';
import PopupButtons from './PopupButtons';
import PopupFormFields from './PopupFormFields';

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
