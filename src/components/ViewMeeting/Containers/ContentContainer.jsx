import React from "react";
import { Grid } from '@mui/material';

const ContentContainer = ({ children }) => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      width='60%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
