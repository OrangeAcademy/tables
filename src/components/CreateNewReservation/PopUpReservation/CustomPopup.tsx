import { LockOutlined, AddCircleOutlineOutlined, Toc } from "@mui/icons-material";
import { useMediaQuery, styled, useTheme, Dialog, Box, DialogContent, DialogTitle, Typography, Stack, FormControl, TextField, DialogActions, Button } from "@mui/material";
import AddAttendees from "components/AddAttendees/AddAttendees";
import AddTopics from "components/AddTopics/AddTopics";
import Calendar from "components/Calendar/Calendar";
import { useState } from "react";

import DateTimeValidation from "../DateTimePicker/DateTimePickerRange";

interface ICreateMeetingReservation {
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


const CreateMeetingReservation = ({visibility, setVisibility}: ICreateMeetingReservation) => {
  const [showAgenda, setShowAgenda] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);

  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('md'));

  const hanldeAgendaPopup = () => setShowAgenda(!showAgenda);
  const handleAttendeesPopup = () => setShowAttendees(!showAttendees)

  // const handleClose = () => setVisibility(false);



  return (
    <>

    <Dialog fullScreen={hasReachedBp} maxWidth="xl"  open={visibility} >
      <Box sx={hasReachedBp ? {display: "flex", flexDirection: "column", pr: "40px"} : {display: "flex", flexDirection: "row"}}>

        <DialogContent sx={hasReachedBp ? {width: "100%"} : {width: "35%", pr: 0}}>
        <DialogTitle sx={{display: "grid", placeItems: "center", gap: 1, pr: 0}}>
              <LockIcon />
              <Typography fontSize="1.5rem">Create New Reservation</Typography>
        </DialogTitle>
            <Stack>
            <Box sx={{display: "flex", flexDirection: "column", mb: "0.5rem"}} >
              <FormControl >
              <TextField label="Email" margin="dense" />
              <TextField label="Meeting Subject" margin="dense"/>
              </FormControl>
              <DateTimeValidation  />
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
              <Button variant="contained" color="error" fullWidth onClick={() => setVisibility(false)}>Cancel</Button>
              <Button variant="contained" color="primary" fullWidth>Confirm</Button>
            </DialogActions>
            </Stack>
        </DialogContent>
        <DialogContent sx={hasReachedBp ? {width: "100%", height: "40vh", maxHeight: "100%"} : {width: "25%"}}>
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