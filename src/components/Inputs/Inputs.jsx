import Avatar from "./Avatar/Avatar";
import Email from "./Email/Email";
import MeetingInput from "./MeetingInput/MeetingInput";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import MailIcon from "@mui/icons-material/Mail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {useState} from "react";
import {makeStyles} from "@mui/styles";
import DateTimeValidation from "../CreateNewReservation/DateTimePicker/DateTimePickerRange";
import AddAttendeesAgendaButtons from "../CreateNewReservation/AddElementButtons/AddAttendeesAgendaButtons";
import Calendar from "../Calendar";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
    container: {
        width: "60%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0 auto",
        height: "50vh",
    },
});

const Inputs = () => {
    const classes = useStyles();
    const [emails] = useState([{label: "firstUser@mail.com"}, {label: "secondUser@mail.com"}, {label: "thirdUser@mail.com"}]);
    return (
        <div className={classes.container}>
            <Stack direction="row" spacing={3}>
                <Avatar text="Create New Reservation" icon={<LockOutlinedIcon htmlColor="#fff"/>}/>
                <Email text="Email" icon={<MailIcon/>} options={emails}/>
                <MeetingInput text="Meeting Subject" icon={<SubjectRoundedIcon/>}/>
                <DateTimeValidation/>
                <AddAttendeesAgendaButtons/>
                <Calendar/>
            </Stack>
        </div>
    );
};

export default Inputs;
