import React, {useState} from "react";
import CustomPopup from "../components/CreateNewReservation/PopUpReservation/CustomPopup";
import Button from "@mui/material/Button";
import Inputs from "../components/Inputs/Inputs";

const PopUpMeeting = () => {
    const [visibility, setVisibility] = useState(false);
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    return (
        <div>
            <Button className="reservationBut" onClick={(e) => setVisibility(!visibility)} variant="contained">
                Create Reservation</Button>
            <CustomPopup
                onClose={popupCloseHandler}
                show={visibility}
            >
                <Inputs/>
            </CustomPopup>
        </div>
    );
};

export default PopUpMeeting;