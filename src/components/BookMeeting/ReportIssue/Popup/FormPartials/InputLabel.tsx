import React from "react";
// MUI Imports
import { InputLabel } from '@mui/material';

// Styles
const labelStyles = { background: 'white', paddingRight: '5px' };

// Hard-typed props
interface props {
  inputLabel: string
}

// Creates label for form inputs
const Label = ({ inputLabel }: props) => {
  return (
    <InputLabel
      color="secondary"
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
