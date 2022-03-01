import { Button, IconButton, styled } from '@mui/material';

/* 

  Regular button with text 
  Btn structure: [ {BELL_ICON} REPORT AN ISSUE

*/
export const StyledBtnWithText = styled(Button)({
  backgroundColor: '#fef9e7',
  variant: 'contained',
  marginLeft: 'auto',
  marginTop: 'auto',
  '&:hover': {
    backgroundColor: 'white',
  },
  '&:active': {
    backgroundColor: 'white',
  },
});


/* 

  Icon button, triggered when Viewport Width reaches a certain breakpoint
  Btn structure: [ {BELL_ICON} ]

*/
export const StyledIconBtn = styled(IconButton)({
  backgroundColor: '#fef9e7',
  borderRadius: '4px',
  padding: '6px 16px',
  marginLeft: 'auto',
  marginTop: 'auto',
  '&:hover': {
    backgroundColor: 'white',
  },
  '&:active': {
    backgroundColor: 'white',
  },
})

