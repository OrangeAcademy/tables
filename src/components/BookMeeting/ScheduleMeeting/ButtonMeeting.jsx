// MUI Imports
import { Grid, Button, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Styles
import styles from './Styles';

const ButtonMeeting = () => {
  return (
    <Grid sx={{ ...styles.grid }}>
      <Typography variant="h4" color="white" sx={{ ...styles.title }}>
        Next Meeting - Test
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<DateRangeIcon sx={{ ...styles.icon }} />}
        sx={{ ...styles.button }}
      >
        <Typography variant="p" sx={{ ...styles.btnText }}>
          SCHEDULE A MEETING
        </Typography>
      </Button>
    </Grid>
  );
};

export default ButtonMeeting;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
// import Icon from '@mui/material/Icon';

// const ButtonMeeting= () => {

//   return (
//     <Stack direction="row" spacing={2}>
//       <Button variant="outlined" startIcon={}>
//         Delete
//       </Button>
//       <Button variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
//     </Stack>
//   );
// }

// export default ButtonMeeting;
