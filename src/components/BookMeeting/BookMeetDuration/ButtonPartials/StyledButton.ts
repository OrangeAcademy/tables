// MUI Imports
import { Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';


/* ------------------ COMPONENT ------------------ */
/* 

Styled component used for styling the [Book Meet Duration] button(s) UI. 

*/
const StyledButton = styled(Button)({
  padding: "clamp(1rem, 0.4830rem + 2.5141vw, 3.5rem)",
  backgroundColor: ' #a6dab3',
  fontSize: '1.6rem',
  boxShadow: '6px 10px 37px -7px rgba(0,0,0,0.41)',
  border: 0,
  borderRadius: 5,
  flexShrink: 1,
  color: '#679980',
  "&:hover": {
    backgroundColor: '#a6dab3'
  },
  '&:focus': {
    backgroundColor: '#fef9e5',
    opacity: [0.4, 0.4, 0.9],
    borderColor: grey[500],
    boxShadow: '5px 11px 50px -8px rgba(0,0,0,0.95)',
  },
  '&:focus > *': {
    color: '#75726c',
  },
  '&:disabled': {
    color: 'gray',
    backgroundColor: 'transparent',
    boxShadow: "none",
    border: '1px solid gray'
  }
});

export default StyledButton;
