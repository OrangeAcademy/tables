import {Grid} from '@mui/material';
import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
const BackgroundContainer = ({ children }: Props) => {

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