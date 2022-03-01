// MUI Imports
import { styled } from '@mui/material';


/*
Container styles the Book Meeting page title (route-path: "/")
*/

export const TitleContainer = styled('div')({
  marginBottom: "clamp(5vmax, 2rem, 80px)", 
  padding: 0 
})


/*
Text styles the Book Meeting page title (route-path: "/") 
*/

export const TitleText = styled('h1')(({theme}) => ({
  margin: 0,
  color: '#fef9e7',
  fontSize: 'clamp(1rem, 7vw, 80px)',
  backgroundColor: '#50bf8a',
  letterSpacing:  0.23,
  textAlign: 'center',
  lineHeight: 1.4,
  [theme.breakpoints.down('tablet')]: {
    fontWeight: 400,
    letterSpacing: 0
  }
}));
