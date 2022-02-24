import React, { useState } from 'react';
import CustomPopup from '../components/CreateNewReservation/PopUpReservation/CustomPopup';
import Inputs from '../components/Inputs/Inputs';
import Calendar from '../components/Calendar/Calendar';
import ButtonComponent from '../components/ButtonComponent';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Grid } from '@mui/material';

const PopUpMeeting = () => {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  return (
    <div>
      <ButtonComponent
        startIcon={<DateRangeIcon />}
        variant="outlined"
        content="Schedule a meeting"
        onClick={(e) => setVisibility(!visibility)}
      />

      <CustomPopup onClose={popupCloseHandler} show={visibility}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={7}>
            <Inputs />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Calendar />
          </Grid>
        </Grid>
      </CustomPopup>
    </div>
  );
};

export default PopUpMeeting;
