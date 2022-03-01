/*
  Used for creating label for input field.

  Use example: <Label inputLabel="Your Email" />
*/
import React from "react";
// MUI Imports
import { InputLabel } from '@mui/material';

// Props validation
interface IProps {
  inputLabel: string
}

/* ---------------------------------------------- */
/* --------------- Actual Component ------------- */
/* ---------------------------------------------- */
const Label = ({ inputLabel }: IProps) => {
  return (
    <InputLabel
      color="primary"
      sx={{ background: 'white', paddingRight: '5px' }}
    >
      {inputLabel}
    </InputLabel>
  );
};

export default Label;
