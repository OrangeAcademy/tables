import { Typography } from '@mui/material';

const textStyle = {
  mt: '-0.4rem;',
  color: 'white',
  fontSize: '5rem',
  backgroundColor: '#50bf8a',
  letterSpacing: '0.2rem',
};

const TitleText = ({ children }) => (
  <Typography sx={{ ...textStyle }} align="center" component="h2">
    {children}
  </Typography>
);

export default TitleText;
