/*
  Container for dropdown options. Used in 'Issue Type' dropdown.
  Sets the text and icon to be on same level
*/

// MUI Imports
import { styled } from '@mui/material';

/* --------------- Styled Component --------------- */
const InputTextContainer = styled('div')({
  display: 'grid', 
  gridTemplateColumns: '2rem auto',
  alignContent: 'center',
  padding: "0px"
})

export default InputTextContainer;
