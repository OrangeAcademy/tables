import { Grid } from '@mui/material';
import React from "react";

const BackgroundContainer = ({ children }) => {
  return (
    <Grid
      display='flex'
      flexDirection='row'
      maxWidth="100%"
      maxHeight="100%"
      height="100vh"
      sx={{ overflow: 'none' }}
    >
      {children}
    </Grid>
  );
};

export default BackgroundContainer;
