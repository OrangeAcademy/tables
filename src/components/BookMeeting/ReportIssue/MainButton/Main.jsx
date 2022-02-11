// MUI Imports
import { Typography, Button } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

// Styles
import { iconStyles, buttonStyles } from './Styles';

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
