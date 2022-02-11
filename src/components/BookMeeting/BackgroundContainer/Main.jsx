//MUI Imports
import { Grid } from '@mui/material';

// Styles
const gridStyle = { bgcolor: '#50bf8a', overflow: 'none' };

// Container for the 'slide 1' page
const BackgroundContainer = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      wrap="wrap"
      padding="1rem 2rem"
      maxWidth="100%"
      maxHeight="100%"
      height="100vh"
      sx={{ ...gridStyle }}
    >
      {children}
    </Grid>
  );
};

export default BackgroundContainer;
