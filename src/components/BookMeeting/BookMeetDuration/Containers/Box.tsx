import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 'clamp(5px, 25px, 10vw)',
});

export default StyledBox;
