import React from "react";

//MUI Imports
import { Grid } from '@mui/material';

// Styles
const gridStyle = { bgcolor: '#50bf8a', overflow: 'none' };

// Hard-typed props
interface props { 
  children?: JSX.Element | JSX.Element[]
} 

// Container for the 'slide 1' page
// For route: "/"
const BackgroundContainer = ({ children }: props): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      wrap="wrap"
      padding="1rem 2rem"
      maxWidth="100%"
      maxHeight="100%"
      minHeight="100vh"
      sx={{ ...gridStyle }}
    >
      {children}
    </Grid>
  );
};

export default BackgroundContainer;
