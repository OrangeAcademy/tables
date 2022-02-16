import React from "react";
import { useState } from 'react';

// MUI Imports
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// Local imports
import Label from '../FormPartials/InputLabel';

// Styles
const InputAdornmentStyles = { color: '#3d50af' };
const formControlStyles = { m: 1, width: '100%' };

// Hard-typed props
interface props {
  inputType: string,
  label: string,
  icon: JSX.Element,
  multiline: boolean
}

// This is a 'template' component for creating text fields in form.
// Currently used for Report Issue Popup

// Key differences compared to the default MUI Component:
// 1. This one has icon
// 2. label is fixed to top-left

export const OutlinedTextField = ({ inputType, label, icon, multiline }: props) => {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<{value: any}>):void => setText(e.target.value);

  return (
    <FormControl sx={{ ...formControlStyles }} variant="outlined">
      <Label inputLabel={label} />
      <OutlinedInput
        multiline={multiline}
        notched={true}
        color="secondary"
        id="outlined-adornment"
        type={inputType}
        value={text}
        onChange={(e) => handleChange(e)}
        startAdornment={
          <InputAdornment position="start" sx={{ ...InputAdornmentStyles }}>
            {icon}
          </InputAdornment>
        }
        label={inputType}
      />
    </FormControl>
  );
};
