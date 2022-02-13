import React, { useState } from "react";
import CustomPopup from "../components/CreateNewReservation/PopUpReservation/CustomPopup";
import Button from "@mui/material/Button";
import Inputs from "../components/Inputs/Inputs";
import Calendar from "../components/Calendar/Calendar";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
      <Button className="reservationBut" onClick={(e) => setVisibility(!visibility)} variant="contained">
        Create Reservation
      </Button>

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
