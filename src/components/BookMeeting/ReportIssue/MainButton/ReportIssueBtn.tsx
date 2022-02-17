import React from "react";

import { Button, styled } from '@mui/material';

const StyledReportIssueButton = styled(Button)({
  backgroundColor: '#fef9e7',
  marginLeft: 'auto',
  '&:hover': {
    backgroundColor: 'white',
  },
  '&:active': {
    backgroundColor: 'white',
  },
});

export default StyledReportIssueButton;
