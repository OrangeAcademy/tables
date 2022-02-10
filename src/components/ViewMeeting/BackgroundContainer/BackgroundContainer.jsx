import { Grid } from '@mui/material';

const BackgroundContainer = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
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
