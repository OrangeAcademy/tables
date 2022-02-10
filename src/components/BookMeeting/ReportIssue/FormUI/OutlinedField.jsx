import { useState } from 'react';

import {
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Select, MenuItem, Typography } from '@mui/material';

import CategoryIcon from '@mui/icons-material/Category';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
export const OutlinedTextField = ({
  inputType = 'text',
  label,
  icon,
  multiline = false,
}) => {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  return (
    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
      <InputLabel
        color="grey"
        margin="dense"
        variant="outlined"
        htmlFor="outlined-adornment"
        sx={{ background: 'white', paddingRight: '5px' }}
      >
        {label}
      </InputLabel>

      <OutlinedInput
        multiline={multiline}
        notched={true}
        color="grey"
        id="outlined-adornment"
        type={inputType}
        value={text}
        onChange={(e) => handleChange(e)}
        startAdornment={
          <InputAdornment position="start" sx={{ color: '#3d50af' }}>
            {icon}
          </InputAdornment>
        }
        label={inputType}
      />
    </FormControl>
  );
};

const ContainerNoGutters = ({ children }) => {
  return (
    <Container
      disableGutters={true}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      {children}
    </Container>
  );
};

export const OutlinedSelectField = () => {
  const [issueType, setIssueType] = useState('App');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setIssueType(e.target.value);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <InputLabel
        focused={false}
        color="grey"
        margin="dense"
        variant="outlined"
        shrink={true}
        id="demo-controlled-open-select-label"
      >
        Issue type
      </InputLabel>
      <Select
        notched={true}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={issueType}
        label="Issue type"
        onChange={handleChange}
        sx={{ display: 'flex', alignItems: 'center' }}
        defaultValue="App"
        defaultChecked="App"
      >
        <MenuItem value="App" selected={true}>
          <ContainerNoGutters>
            <CategoryIcon sx={{ color: ' #3d50af' }} />
            <Typography component={'span'} ml="3px">
              App
            </Typography>
          </ContainerNoGutters>
        </MenuItem>
        <MenuItem value={'Meeting Room'}>
          <ContainerNoGutters>
            <MeetingRoomIcon sx={{ color: ' #3d50af' }} />
            <Typography>Meeting Room</Typography>
          </ContainerNoGutters>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
