// MUI Imports
import { Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

const StyledButton = styled(Button)({
  width: 245,
  height: 155,
  backgroundColor: ' #a6dab3',
  fontSize: '1.6rem',
  boxShadow: '6px 10px 37px -7px rgba(0,0,0,0.41)',
  border: 0,
  borderRadius: 2,
  flexShrink: 1,
  mb: 8.5,
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
});

export default StyledButton;
