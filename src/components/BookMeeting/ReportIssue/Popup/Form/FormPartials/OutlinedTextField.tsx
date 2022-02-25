/* 
Used for creating input field(s) in Report Issue Popup form.

Key differences compared to the default MUI Component (OutlinedInput):
  1. Has icon at the start (<InputAdornment position="start" />)
  2. Label is fixed to top-left

Use example:  <OutlinedTextField icon={<EmailRounded />} inputType="email" label="Your email"  multiline={false} /> 
*/

// React Imports
import React, { useState } from "react";

// MUI Imports
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// Local imports
import Label from './InputLabel';


// Props validation
interface props {
  icon?: JSX.Element,
  inputType: string | 'text',
  label: string,
  multiline: boolean
}

/* ---------------------------------------------------------------- */
/* ----------------------- Actual Component ----------------------- */
/* ---------------------------------------------------------------- */

const OutlinedTextField = ({ inputType, label, icon, multiline }: props) => {
  // User input to state
  const [inputValue, setInputValue] = useState('');

  // Sets user input to state
  const handleChange = (e: React.ChangeEvent<{value: string}>) => setInputValue(e.target.value);

  return (
    <FormControl sx={{my: 1, width: "100%"}}>
      <Label inputLabel={label} />
      <OutlinedInput
        color="primary"
        label={inputType}
        multiline={multiline}
        onChange={(e) => handleChange(e)}
        startAdornment={
          <InputAdornment position="start" sx={{ color: '#3d50af' }}> {icon} </InputAdornment>
        }
        type={inputType}
        value={inputValue}
      />

    </FormControl>
  );
};

export default OutlinedTextField;