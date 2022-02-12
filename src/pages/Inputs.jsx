import Avatar from "../components/Inputs/Avatar/Avatar";
import Email from "../components/Inputs/Email/Email";
import MeetingInput from "../components/Inputs/MeetingInput/MeetingInput";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import MailIcon from "@mui/icons-material/Mail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import DateTimeValidation from "../components/CreateNewReservation/DateTimePicker/DateTimePickerRange";
import AddAttendeesAgendaButtons from "../components/CreateNewReservation/AddElementButtons/AddAttendeesAgendaButtons";

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
  const [emails] = useState([{ label: "firstUser@mail.com" }, { label: "secondUser@mail.com" }, { label: "thirdUser@mail.com" }]);
  return (
    <div className={classes.container}>
      <Avatar text="Create New Reservation" icon={<LockOutlinedIcon htmlColor="#fff" />} />
      <Email text="Email" icon={<MailIcon />} options={emails} />
      <MeetingInput text="Meeting Subject" icon={<SubjectRoundedIcon />} />
      <DateTimeValidation />
      <AddAttendeesAgendaButtons />
    </div>
  );
};

export default Inputs;
