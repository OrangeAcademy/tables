// MUI Imports
import { Grid, Button, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Styles
import { styles } from './Styles';

import Inputs from "../../Inputs/Inputs";
import Calendar from "../../Calendar/Calendar";

import CustomPopup from "../../CreateNewReservation/PopUpReservation/CustomPopup";
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
    {visibility && 
    
    <CustomPopup title="Book a meeting" onClose={setVisibility} show={visibility} > 
      <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={7}>
            <Inputs />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Calendar />
        </Grid>
        </Grid>
    </CustomPopup>}
    </>
  );
};

export default ButtonMeeting;