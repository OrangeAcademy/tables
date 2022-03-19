// MUI Imports
import { Grid, Button, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Styles
import { styles } from './Styles';

import CreateNewReservationPopup from "../../CreateNewReservation/PopUpReservation/CustomPopup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextEventNameSelector } from "store/StateRoom/selectors";
import { setShouldAutoBook } from "store/StateRoom/stateRoomSlice";



/* -------------------  Component  ---------------- */
/*
  Main component for Schedule a meeting.

  Contains: 
    1. Next meeting title (format: `Next meeting - ${MEETING_NAME}` )
    2. Button for for scheduling a meeting
*/

const ButtonMeeting = () => {
  const [visibility, setVisibility] = useState(false);
  const nextMeetingName = useSelector(nextEventNameSelector)
  const dispatch = useDispatch();


  useEffect(() => {

  
    return () => {
      dispatch(setShouldAutoBook(false));
    }
  }, [])

  return (
    <>
    <Grid sx={{ ...styles.grid }}>
      <Typography variant="h4" sx={{ ...styles.title }}>
        {nextMeetingName ? `Next Meeting - ${nextMeetingName}` : ""}
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