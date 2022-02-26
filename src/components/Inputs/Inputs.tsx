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
import { Grid, Stack } from "@mui/material";
const useStyles = makeStyles({
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "1rem",
  },
});

const Inputs = () => {
  const classes = useStyles();
  const [emails] = useState<
    {
      label: string;
    }[]
  >([{ label: "firstUser@mail.com" }, { label: "secondUser@mail.com" }, { label: "thirdUser@mail.com" }]);

  return (
    <>
      <Stack className={classes.avatar}>
        <Avatar text="Create New Reservation" icon={<LockOutlinedIcon htmlColor="#fff" />} />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Email text="Email" icon={<MailIcon />} options={emails} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <MeetingInput text="Meeting Subject" icon={<SubjectRoundedIcon />} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DateTimeValidation />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AddAttendeesAgendaButtons />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ButtonComponent variant="contained" content="Cancel" color="error" sx={{ mx: "auto", width: 400 }} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ButtonComponent variant="outlined" content="Confirm" disabled sx={{ mx: "auto", width: 400 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Inputs;