import React, { useState } from 'react';
import CustomPopup from '../components/CreateNewReservation/PopUpReservation/CustomPopup';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button } from "@mui/material";
import {INextEvent} from "../interfaces/MeetingDetails";

const PopUpMeeting = () => {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(!visibility);
  };
  return (
    <div>
      <Button
        startIcon={<DateRangeIcon />}
        variant="outlined"
        onClick={() => setVisibility(!visibility)}
      >Schedule a meeting</Button>

      <CustomPopup title="Book meeting" onClose={popupCloseHandler} show={visibility}/>
    </div>
  );
};

export default PopUpMeeting;
