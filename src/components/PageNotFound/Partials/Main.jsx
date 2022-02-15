import { Container, Typography, styled } from '@mui/material';

// Contains custom Styled Components for the 'Page Not Found'
// Contains: MainContainer, LettersContainer, StyledSubtitle, StyledLetters

// Container for centering contents in the middle of the page
export const MainContainer = styled(Container)({
  display: 'grid',
  placeItems: 'center',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  maxWidth: '530px',
});

// Container for the 404 letters
export const LettersContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
});

// Used for subtitles above and below 404 letters
export const StyledSubtitle = styled(Typography)({
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 400,
  color: '#000',
});

// Independent element styles for the 404 letters
// Use: <StyledLetters>4</StyledLetters>
export const StyledLetters = styled(Typography)({
  display: 'inline-block',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '252px',
  fontWeight: 900,
  color: '#262626',
  textTransform: 'uppercase',
  letterSpacing: '-40px',
  lineHeight: 0.9,
  textAlign: 'center',
  textShadow: '-8px 0 0 #fff',
});
