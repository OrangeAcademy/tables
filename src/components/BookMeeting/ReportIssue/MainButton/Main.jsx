// MUI Imports
import { Typography } from '@mui/material';

// Local imports
import StyledButton from './ReportIssueBtn';
import StyledIcon from './ReportIssueBtnIcon';

// Button that triggers the popup for Reporting an Issue
const ReportIssueButton = ({ handleClickOpen }) => {
  return (
    <StyledButton
      variant="contained"
      startIcon={<StyledIcon />}
      onClick={handleClickOpen}
    >
      <Typography color="black">Report an issue</Typography>
    </StyledButton>
  );
};

export default ReportIssueButton;
