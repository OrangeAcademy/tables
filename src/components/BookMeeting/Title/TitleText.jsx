import { Typography } from '@mui/material';

const textStyle = {
  mt: '-0.4rem;',
  color: 'white',
  fontSize: '3.57rem',
  backgroundColor: '#50bf8a',
};

const TitleText = ({ children }) => (
  <Typography
    sx={{ ...textStyle }}
    align="center"
    color="textSecondary"
    component="h2"
  >
    {children}
  </Typography>
);

export default TitleText;