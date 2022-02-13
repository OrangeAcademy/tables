// MUI Imports
import { DialogTitle, Typography } from '@mui/material';
import ReportIssuePopupIcon from './Icon';

// Header of the popup card
const PopupTitle = () => {
  return (
    <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
      <ReportIssuePopupIcon />
      <Typography component="span">Report an issue</Typography>
    </DialogTitle>
  );
};

export default PopupTitle;
