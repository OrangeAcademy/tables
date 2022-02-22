//MUI Imports
import { styled } from '@mui/material';

/* ------------------ Component ------------------ */
/* 

Container Styles for Book Meeting page (route-path: "/")

*/
const BackgroundContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: "clamp(3px, 5vw , 1rem) clamp(6px, 10vw , 2rem)",
  backgroundColor: '#50bf8a', 
  overflow: 'hidden' ,
  maxWidth:"100%",
  maxHeight:"100%",
  minHeight:"100vh",
  boxSizing: 'border-box'
})

export default BackgroundContainer;
