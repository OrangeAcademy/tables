// MUI Imports
import { Typography, Button } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

// Button that triggers the popup for Reporting an Issue
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

export default ReportIssueButton;
