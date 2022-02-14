import Avatar from "./Avatar/Avatar";
import Email from "./Email/Email";
import MeetingInput from "./MeetingInput/MeetingInput";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import MailIcon from "@mui/icons-material/Mail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import DateTimeValidation from "../CreateNewReservation/DateTimePicker/DateTimePickerRange";
import AddAttendeesAgendaButtons from "../CreateNewReservation/AddElementButtons/AddAttendeesAgendaButtons";
import ButtonComponent from "../ButtonComponent";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "40vh",
  },
  layout: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const Inputs = () => {
  const classes = useStyles();
  const [emails] = useState([{ label: "firstUser@mail.com" }, { label: "secondUser@mail.com" }, { label: "thirdUser@mail.com" }]);
  return (
    <div className={classes.avatar}>
      <Avatar text="Create New Reservation" icon={<LockOutlinedIcon htmlColor="#fff" />} />
      <div className={classes.container}>
        <Email text="Email" icon={<MailIcon />} options={emails} />
        <MeetingInput text="Meeting Subject" icon={<SubjectRoundedIcon />} />
        <DateTimeValidation />
        <AddAttendeesAgendaButtons />
        <div className={classes.layout}>
          <ButtonComponent variant="contained" content="Cancel" color="error" style={{ padding: ".5rem 6.2rem" }} />
          <ButtonComponent variant="outlined" content="Confirm" disabled style={{ padding: ".5rem 6rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
