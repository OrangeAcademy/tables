import React from "react";
import {Grid} from '@mui/material';

const ContentContainer = ({children}) => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      height='100vh'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        width: {mobile: '100%', tablet: '60%'},
        padding: {mobile: '10px', tablet: '20px'}
      }}
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
