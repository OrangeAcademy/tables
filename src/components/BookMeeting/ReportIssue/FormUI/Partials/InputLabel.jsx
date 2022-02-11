// MUI Imports
import { InputLabel } from '@mui/material';

// Creates label for form inputs
const Label = ({ inputLabel }) => {
  return (
    <InputLabel
      color="grey"
      margin="dense"
      variant="outlined"
      htmlFor="outlined-adornment"
      sx={{ background: 'white', paddingRight: '5px' }}
    >
      {inputLabel}
    </InputLabel>
  );
};

export default Label;
