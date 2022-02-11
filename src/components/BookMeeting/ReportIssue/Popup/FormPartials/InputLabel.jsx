// MUI Imports
import { InputLabel } from '@mui/material';

// Styles
const labelStyles = { background: 'white', paddingRight: '5px' };

// Creates label for form inputs
const Label = ({ inputLabel }) => {
  return (
    <InputLabel
      color="grey"
      margin="dense"
      variant="outlined"
      htmlFor="outlined-adornment"
      sx={{ ...labelStyles }}
    >
      {inputLabel}
    </InputLabel>
  );
};

export default Label;
