import React from "react";
// MUI Imports
import { DialogTitle, Typography } from '@mui/material';
import ReportIssuePopupIcon from './Icon';

// Styles
const dialogStyles = { display: 'flex', justifyContent: 'center' };

// Header of the report issue popup card;
// Contains: shield icon + 'Report an issue' text
const PopupTitle = () => {
  return (
    <DialogTitle sx={{ ...dialogStyles }}>
      <ReportIssuePopupIcon />
      <Typography fontSize="1.5rem">Report an issue</Typography>
    </DialogTitle>
  );
};

export default PopupTitle;
