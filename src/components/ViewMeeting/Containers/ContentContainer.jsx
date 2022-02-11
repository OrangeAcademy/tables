import React from "react";
import { Grid } from '@mui/material';

const ContentContainer = ({ children }) => {
  return (
    <Grid
      display='flex'
      direction="row"
      width='60%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#50bf8a'
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
