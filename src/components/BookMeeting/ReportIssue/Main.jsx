import { useState } from 'react';

// Local imports
import ReportIssuePopup from './Popup/Main';
import ReportIssueButton from './Partials/ReportIssueButton';

// The main component that embeds
// 1. The report issue button, which opens the 'Report an Issue' popup
// 2. The popup with the actual form
const ReportIssue = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ReportIssueButton handleClickOpen={handleClickOpen} />
      <ReportIssuePopup open={open} handleClose={handleClose} />
    </>
  );
};

export default ReportIssue;
