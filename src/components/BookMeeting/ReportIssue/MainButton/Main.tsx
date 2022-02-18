import React from "react";


// MUI Imports
import { Typography } from '@mui/material';

// Local imports
import StyledButton from './ReportIssueBtn';
import StyledIcon from './ReportIssueBtnIcon';

// Hard-typed props
interface props {
  handleClickOpen: Function
}

// Button that triggers the popup for Reporting an Issue
const ReportIssueButton = ({ handleClickOpen }: props) => {
  return (
    <StyledButton
      variant="contained"
      startIcon={<StyledIcon />}
      onClick={() => handleClickOpen()}
    >
      <Typography color="black" fontSize="clamp(12px, 1rem, 1.2rem)">Report an issue</Typography>
    </StyledButton>
  );
};

export default ReportIssueButton;
