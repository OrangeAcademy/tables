import React from "react";
import { useState } from 'react';

// MUI Imports
import { FormControl, Select, MenuItem, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { SelectChangeEvent } from "@mui/material";

//Local imports
import Label from "../Form/FormPartials/InputLabel";
import InputTextContainer from '../Form/FormPartials/InputTextContainer';

// Styles
const iconStyles = { color: ' #3d50af' };
const formControlStyles = { m: 1, width: '100%' };

// 

// Create an outlined SELECT field. Could be refactored to receive dropdown items as props
// Current dropdown options: app, meeting
  const IssueTypeDropdown = () => {
  const [issueType, setIssueType] = useState('App');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => setIssueType(event.target.value as string);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <FormControl sx={{ ...formControlStyles }}>
      <Label inputLabel={'Issue type'} />

      <Select
        // notched={true}
        open={open}
        onClose={() => handleClose()}
        onOpen={() => handleOpen()}
        value={issueType}
        label="Issue type"
        onChange={(e) => handleChange(e)}
      >
        {/* Option 1 | App */}
        <MenuItem value="App">
          <InputTextContainer>
            <CategoryIcon sx={{ ...iconStyles }} />
            <Typography ml="3px">App</Typography>
          </InputTextContainer>
        </MenuItem>

        {/* Option 2 | Meeting Room*/}
        <MenuItem value="Meeting Room">
          <InputTextContainer>
            <MeetingRoomIcon sx={{ ...iconStyles }} />
            <Typography>Meeting Room</Typography>
          </InputTextContainer>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default IssueTypeDropdown;