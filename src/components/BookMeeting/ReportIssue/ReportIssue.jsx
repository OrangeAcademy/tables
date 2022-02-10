import { useState } from 'react';
import { Typography, Button } from '@mui/material';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ReportIssuePopup from './Popup/Main';

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

const ReportIssueButton = ({ handleClickOpen }) => {
  return (
    <Button
      variant="contained"
      startIcon={
        <NotificationsNoneOutlinedIcon
          sx={{ color: 'black', width: '32px', height: '32px' }}
        />
      }
      onClick={handleClickOpen}
      sx={{
        backgroundColor: 'white',
        maxWidth: 'fit-content',
        marginLeft: 'auto',
      }}
    >
      <Typography color="black">Report an issue</Typography>
    </Button>
  );
};

export default ReportIssue;
