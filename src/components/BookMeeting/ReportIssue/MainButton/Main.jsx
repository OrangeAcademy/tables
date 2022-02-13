// MUI Imports
import { Typography } from '@mui/material';

// Local imports
import Button from './ReportIssueBtn';
import Icon from './ReportIssueBtnIcon';

// Button that triggers the popup for Reporting an Issue
const ReportIssueButton = ({ handleClickOpen }) => {
  return (
    <Button variant="contained" startIcon={<Icon />} onClick={handleClickOpen}>
      <Typography color="black">Report an issue</Typography>
    </Button>
  );
};

export default ReportIssueButton;
