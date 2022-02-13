import { Typography, styled } from '@mui/material';

const StyledTitle = styled(Typography)({
  mt: '-0.4rem;',
  color: 'white',
  fontSize: '5rem',
  backgroundColor: '#50bf8a',
  letterSpacing: '0.2rem',
  textAlign: 'center',
  lineHeight: 1.4,
});

const TitleText = ({ children }) => {
  return <StyledTitle component="h2">{children}</StyledTitle>;
};

export default TitleText;
