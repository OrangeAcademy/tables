import React, { useState } from 'react';

// Local imports
import ReportIssuePopup from './Popup/Popup';
import ReportIssueButton from './MainButton/MainButton';
import {Box} from "@mui/material";


/* -------------------Main Component---------------- */
/* 
  The MAIN 'Report Issue' component.

  Contains:
    1. Button for opening the popup
    2. Popup
*/

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
