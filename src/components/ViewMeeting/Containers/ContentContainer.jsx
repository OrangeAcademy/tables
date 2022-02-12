import React from "react";
import { Grid } from '@mui/material';

const ContentContainer = ({ children }) => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      width='60%'
      height='100vh'
      justifyContent='space-between'
      alignItems='center'
      padding='20px'
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
