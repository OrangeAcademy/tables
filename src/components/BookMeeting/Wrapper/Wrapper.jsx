import { Grid } from '@mui/material';

const Wrapper = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      wrap="wrap"
      padding="4rem"
      maxWidth="100%"
      maxHeight="100%"
      height="100vh"
      sx={{ bgcolor: '#50bf8a', overflow: 'none' }}
    >
      {children}
    </Grid>
  );
};

export default Wrapper;
