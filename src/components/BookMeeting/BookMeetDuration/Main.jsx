// MUI Imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Local imports
import { boxStyles, buttonStyles, textStyles } from './Styles';
import { Typography } from '@mui/material';

// This array defines the time duration of a meeting user wants to book
const MEETING_DURATION = [15, 30, 45, 60];

// Based on Meeting Duration -> Returns MEETING_DURATION.length number of buttons for booking a meeting
const MeetingDurationButtons = () => {
  return (
    <Box sx={{ ...boxStyles }}>
      {MEETING_DURATION.map((e, i) => (
        <Button sx={{ ...buttonStyles }} key={i}>
          <Typography sx={{ ...textStyles }}>{e} min</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default MeetingDurationButtons;
