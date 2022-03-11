// MUI Imports
import { Grid, Button, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Styles
import { styles } from './Styles';

import CreateNewReservationPopup from "../../CreateNewReservation/PopUpReservation/CustomPopup";
import { useState } from "react";



/* -------------------  Component  ---------------- */
/*
  Main component for Schedule a meeting.

  Contains: 
    1. Next meeting title (format: `Next meeting - ${MEETING_NAME}` )
    2. Button for for scheduling a meeting
*/

const ButtonMeeting = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
    <Grid sx={{ ...styles.grid }}>
      <Typography variant="h4" sx={{ ...styles.title }}>
        Next Meeting - Test
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<DateRangeIcon sx={{ ...styles.icon }} />}
        sx={{ ...styles.button }}
        onClick={() => setVisibility(!visibility)}
      >
        <Typography variant="subtitle1" sx={{ ...styles.btnText }}>
          SCHEDULE A MEETING
        </Typography>
      </Button>
    </Grid>

      {visibility && <CreateNewReservationPopup setVisibility={setVisibility} visibility={visibility}/>}
    </>
  );
};

export default ButtonMeeting;