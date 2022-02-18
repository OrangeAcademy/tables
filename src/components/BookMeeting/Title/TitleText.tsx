import { Typography, styled } from '@mui/material';

// Typography for the main page title (route path: "/") 
const TitleText = styled(Typography)({
  mt: '-0.4rem;',
  color: '#fef9e7',
  fontSize: 'clamp(1rem, 7vw, 80px)',
  backgroundColor: '#50bf8a',
  letterSpacing:  0,
  textAlign: 'center',
  lineHeight: 1.4,
});

export default TitleText;
