// MUI Imports
import { Typography, Button } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

// Styles
const iconStyles = { color: 'black', width: '32px', height: '32px' };
const buttonStyles = { backgroundColor: 'white', marginLeft: 'auto' };

// Button that triggers the popup for Reporting an Issue
const ReportIssueButton = ({ handleClickOpen }) => {
  return (
    <Button
      variant="contained"
      startIcon={<NotificationsNoneOutlinedIcon sx={{ ...iconStyles }} />}
      sx={{ ...buttonStyles }}
      onClick={handleClickOpen}
    >
      <Typography color="black">Report an issue</Typography>
    </Button>
  );
};

export default ReportIssueButton;
