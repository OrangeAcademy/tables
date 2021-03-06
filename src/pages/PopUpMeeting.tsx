import React, {useState} from 'react';
import CustomPopup from '../components/CreateNewReservation/PopUpReservation/CustomPopup';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Button} from "@mui/material";

const PopUpMeeting = () => {
    const [visibility, setVisibility] = useState(false);
    const popupCloseHandler = () => {
        setVisibility(!visibility);
    };
    return (
        <div>
            <Button
                startIcon={<DateRangeIcon/>}
                variant="outlined"
                onClick={() => setVisibility(!visibility)}
            >Schedule a meeting</Button>

            <CustomPopup setVisibility={popupCloseHandler} visibility={visibility}/>
        </div>
    );
};

export default PopUpMeeting;
