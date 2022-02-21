import { Box, styled } from '@mui/material';


/* ------------------ COMPONENT ------------------ */
/* 

Container for BookMeetDuration buttons

Set to flex (row) by default;
Set to grid (2 items per row) When vw is between xs: 0px and md: 900px 

*/

const StyledBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 'clamp(5px, 25px, 10vw)',
  [theme.breakpoints.between('xs', 'md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    placeSelf: "center"
  }
}));

export default StyledBox;
