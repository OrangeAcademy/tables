import React, { useState } from "react";
import CustomPopup from "../components/CreateNewReservation/PopUpReservation/CustomPopup";
import Inputs from "../components/Inputs/Inputs";
import Calendar from "../components/Calendar/Calendar";
import { makeStyles } from "@mui/styles";
import ButtonComponent from "../components/ButtonComponent";
import DateRangeIcon from "@mui/icons-material/DateRange";

const useStyles = makeStyles({
  layoutContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const PopUpMeeting = () => {
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const classes = useStyles();
  return (
    <div>
      <ButtonComponent startIcon={<DateRangeIcon />} variant="outlined" content="Schedule a meeting" onClick={(e) => setVisibility(!visibility)} />

      <CustomPopup onClose={popupCloseHandler} show={visibility}>
        <div className={classes.layoutContainer}>
          <Inputs />
          <Calendar />
        </div>
      </CustomPopup>
    </div>
  );
};

export default PopUpMeeting;
