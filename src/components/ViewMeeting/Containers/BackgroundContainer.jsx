import {Grid} from '@mui/material';
import React from "react";

const BackgroundContainer = ({children}) => {

  return (
    <Grid
      display='flex'
      maxWidth="100%"
      maxHeight="100%"
      sx={{
        overflow: 'none',
        flexDirection: {mobile: 'column', tablet: 'row'},
        height: {mobile: 'auto', tablet: '100vh'}
      }}
    >
      {children}
    </Grid>
  );
};

export default BackgroundContainer;
