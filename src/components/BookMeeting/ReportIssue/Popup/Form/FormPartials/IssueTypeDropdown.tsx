/* 
The building block for Issue Type Dropdown. Used in Report Issue Popup.

Takes (as props) an array of 'Issue Type' objects in format { category: string, icon?: JSX.Element }
And returns a Dropdown with the options from the above-mentioned array

Use example: < IssueTypeField {...[ {category: 'App', icon?: <Icon />}, {category: 'Meeting'} ] } /          >
TO NOTE: Passing icon is optional
*/

// React imports
import React, { useState } from "react";

// MUI Imports
import { FormControl, Select, MenuItem, Typography } from '@mui/material';
import { SelectChangeEvent } from "@mui/material";

//Local imports
import Label from './InputLabel';
import InputTextContainer from './InputTextContainer';


// Function takes a string and returns the first letter capitalized and the rest in lower case 
const capitalize = (textInput: string): string => textInput[0].toUpperCase() + textInput.substring(1).toLowerCase();

// Props validation
interface IIssueTypeObject { 
  category: string, 
  icon?: JSX.Element 
}

/* 
  --------------------------------------------------------------------------------------------------------
Used for creating outlined SELECT field. Receives selection options as an array of objects in format: 
  {category: string, icon?: JSX.Element}
  --------------------------------------------------------------------------------------------------------
*/
const IssueTypeDropdown = (issueOptionsProps: Array< IIssueTypeObject >) => {
  const [issueType, setIssueType] = useState('app');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => setIssueType(event.target.value as string);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <FormControl sx={{my: 1, width: "100%"}}>
      <Label inputLabel="Issue type"/>
      <Select
        open={open}
        value={issueType}
        onChange={(e) => handleChange(e)} 
        onClose={() => handleClose()}
        onOpen={() => handleOpen()}
        label="Issue type"
        >

        {Object.values(issueOptionsProps).map((issueOption, index) => (
          <MenuItem key={index} value={issueOption.category}>
              <InputTextContainer>
                  <i style={{color: '#3d50af'}}>{issueOption.icon || null}</i>
                  
                  <Typography>{capitalize(issueOption.category)}</Typography>
              </InputTextContainer>
          </MenuItem>
        ))}

      </Select>
    </FormControl>
  );
};



export default IssueTypeDropdown;
