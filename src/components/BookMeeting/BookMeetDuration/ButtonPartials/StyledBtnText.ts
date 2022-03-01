// MUI Imports
import { Typography, styled } from '@mui/material';

/* ------------------ COMPONENT ------------------ */
/* 

Styled component used for styling text inside [Book Meet Duration] button(s). 

*/
const StyledBtnText = styled(Typography)(({theme}) => ({
  fontSize: 'clamp(25px, 4.5vw, 3rem)',
  textTransform: 'lowercase',
  fontWeight: 900,
  color: '#679980',
  [theme.breakpoints.down('tablet')]: {
    fontWeight: 400
  }
}));

export default StyledBtnText;
