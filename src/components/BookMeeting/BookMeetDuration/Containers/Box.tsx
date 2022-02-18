import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 'clamp(3vw, 20% ,25px)',
});

export default StyledBox;
