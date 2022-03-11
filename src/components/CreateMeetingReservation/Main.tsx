import { AddCircleOutlineOutlined, Toc } from "@mui/icons-material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { Dialog, DialogTitle, Typography, styled, DialogContent, TextField, Button, DialogActions, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Calendar from "./Calendar/Calendar";
import DateTimeValidation from "./DateTimePicker/DateTimePickerRange";

import AddTopics from "../AddTopics/AddTopics";
import AddAttendees from "../AddAttendees/AddAttendees";
import { useState } from "react";
import {IDateTimeValidation} from "./DateTimePicker/DateTimePickerRange";

interface ICreateMeetingReservation extends IDateTimeValidation {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const LockIcon = styled(LockOutlined)({
  color: "white",
  backgroundColor: '#3d4fb2',
  borderRadius: "50%",
  border: '0.5rem solid #3d4fb2',
  width: "2rem",
  height: "2rem"
})

const StyledDialog = styled(Dialog)({
  minWidth: "100vw"
})

const CreateMeetingReservation = ({visibility, setVisibility, preferredMeetLengthMins}: ICreateMeetingReservation) => {
  const [showAgenda, setShowAgenda] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);


  const hanldeAgendaPopup = () => setShowAgenda(!showAgenda);
  const handleAttendeesPopup = () => setShowAttendees(!showAttendees)

  return (
    <>

    <Dialog maxWidth="xl" open={visibility} onClose={() => setVisibility(false)} >
      <Box sx={{display: "flex"}}>

        <DialogContent sx={{width: "35%", pr: 0}}>
        <DialogTitle sx={{display: "grid", placeItems: "center", gap: 1, pr: 0}}>
              <LockIcon />
              <Typography fontSize="1.5rem">Create New Reservation</Typography>
        </DialogTitle>
            <Stack>
            <Box sx={{display: "flex", flexDirection: "column", mb: "0.5rem"}} >
              <TextField label="Email" margin="dense" />
              <TextField label="Meeting Subject" margin="dense"/>
              <DateTimeValidation  preferredMeetLengthMins={preferredMeetLengthMins} />
            </Box>

            <DialogActions sx={{p: 0}}>
        
              <Button sx={{color: "#171717", border: "1px solid #171717"}} variant="outlined" fullWidth
              endIcon={<AddCircleOutlineOutlined />}
              onClick={handleAttendeesPopup}
              >
                <Box sx={{display: "flex", flexDirection: "column", width: "100%", }}>
                  <Typography  component="p" fontSize="1rem">Add</Typography> 
                  <Typography  component="p" fontSize="1rem">Attendees</Typography> 
                </Box>
              </Button>
              <Button sx={{color: "#171717", border: "1px solid #171717"}}  variant="outlined" fullWidth
                endIcon={<Toc sx={{rotate: "180deg", ml: "auto"}} />}
                onClick={hanldeAgendaPopup}
              >
                <Box sx={{display: "flex", flexDirection: "column", width: "100%"}}
                 
                >
                  <Typography  component="p" fontSize="1rem">Add</Typography>
                  <Typography  component="p" fontSize="1rem">Agenda</Typography>
                </Box>
              </Button>
            </DialogActions>

            <DialogActions  sx={{p: 0, mt:"1.5rem"}}>
              <Button variant="contained" color="error" fullWidth onClick={() => setVisibility(!visibility)}>Cancel</Button>
              <Button variant="contained" color="primary" fullWidth>Confirm</Button>
            </DialogActions>
            </Stack>
        </DialogContent>
        <DialogContent sx={{width: "25%"}}>
            <Calendar />
        </DialogContent>
        </Box>
      </Dialog>

      {showAttendees && (
        <AddAttendees showAttendees={showAttendees} setShowAttendees={setShowAttendees} />)}

      {showAgenda && (
        <AddTopics showAgenda={showAgenda} setShowAgenda={setShowAgenda} />
      )}

      </>
  );
}

export default CreateMeetingReservation;