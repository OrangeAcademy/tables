import React from "react";
import { useState } from 'react';

// MUI Imports
import { MeetingRoom, Category } from '@mui/icons-material';
import { FormControl, Select, MenuItem, Typography, SelectChangeEvent} from '@mui/material';

//Local imports
import Label from "../FormPartials/InputLabel";
import InputTextContainer from '../FormPartials/InputTextContainer';



// Used for generating options in 'Issue Type' dropdown
const issueOptions = [{ category: "app", icon: <Category />}, {category: "meeting", icon: <MeetingRoom />}];

// Function takes a string and returns the first letter capitalized and the rest in lower case 
const capitalize = (textInput: string): string => textInput[0].toUpperCase() + textInput.substring(1).toLowerCase();

interface IReportIssueProps {
  issueType: string, 
  handleIssueType: (e: SelectChangeEvent) => void
}

// Create an outlined SELECT field. Could be refactored to receive dropdown items as props
// Current dropdown options: redux, meeting
const IssueTypeField = ({issueType, handleIssueType}: IReportIssueProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <FormControl margin="dense" fullWidth  >
      <Label inputLabel="Issue type"/>
      <Select
        open={open}
        value={issueType}
        onChange={handleIssueType} 
        onClose={handleClose}
        onOpen={handleOpen}
        label="Issue type"
        >

        {Object.values(issueOptions).map((issueOption, index) => (
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

export default IssueTypeField;
