import { useState } from 'react';

// MUI Imports
import { FormControl, Select, MenuItem, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

//Local imports
import Label from './Partials/InputLabel';
import InputTextContainer from './Partials/InputTextContainer';

// Create an outlined SELECT field. Could be refactored to receive dropdown items as props
export const OutlinedSelectField = () => {
  const [issueType, setIssueType] = useState('App');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setIssueType(e.target.value);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <Label inputLabel={'Issue type'} />

      <Select
        notched={true}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={issueType}
        label="Issue type"
        onChange={handleChange}
      >
        {/* Option 1 */}
        <MenuItem value="App">
          <InputTextContainer>
            <CategoryIcon sx={{ color: ' #3d50af' }} />
            <Typography ml="3px">App</Typography>
          </InputTextContainer>
        </MenuItem>

        {/* Option 2*/}
        <MenuItem value="Meeting Room">
          <InputTextContainer>
            <MeetingRoomIcon sx={{ color: ' #3d50af' }} />
            <Typography>Meeting Room</Typography>
          </InputTextContainer>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
