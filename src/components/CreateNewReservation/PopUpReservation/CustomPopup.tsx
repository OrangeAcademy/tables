import {LockOutlined, AddCircleOutlineOutlined, Toc} from "@mui/icons-material";
import {
  useMediaQuery,
  styled,
  useTheme,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Typography,
  Stack,
  FormControl,
  TextField,
  DialogActions,
  Button,
  Autocomplete
} from "@mui/material";
import AddAttendees from "components/AddAttendees/AddAttendees";
import AddTopics from "components/AddTopics/AddTopics";
import Calendar from "components/Calendar/Calendar";
import {IEvent} from "models/Event";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {postEvents} from "store/Event/actionCreators";
import {clearReservation, setSubject, setUserEmail, setAttendees} from "store/NewMeeting/newMeeting";
import {meetingSelector} from "store/NewMeeting/selectors";
import {useAppDispatch} from "hooks/redux";
import {deleteEvent} from "store/Event/actionCreators";
import DateTimeValidation from "../DateTimePicker/DateTimePickerRange";
import {usersSelector} from "../../../store/Users/selectors";
import {getUsers} from "../../../store/Users/actionsCreators";

interface ICreateMeetingReservation {
  visibility: boolean,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  existingEvent?: IEvent | undefined,
  getNextEventFunction?: any,
}

const LockIcon = styled(LockOutlined)({
  color: "white",
  backgroundColor: '#3d4fb2',
  borderRadius: "50%",
  border: '0.5rem solid #3d4fb2',
  width: "2rem",
  height: "2rem"
})


const CreateMeetingReservation = ({visibility, setVisibility, existingEvent, getNextEventFunction}: ICreateMeetingReservation) => {

  const users = useSelector(usersSelector);

  // Theme
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('md'));

  // State
  const [showAgenda, setShowAgenda] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);
  const [inputEmail, setInputEmail] = useState<string | null>(null);
  const [inputSubject, setInputSubject] = useState("");

  // Handlers
  const hanldeAgendaPopup = () => setShowAgenda(!showAgenda);
  const handleAttendeesPopup = () => setShowAttendees(!showAttendees)

  const dispatch = useAppDispatch();
  const onEmailFieldChange = (_event: any, newValue: any) => {
    setInputEmail(newValue);
  };

  const onSubjectFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputSubject(event.target.value);
  };
  const {start, end, attendees, agenda} = useSelector(meetingSelector);

  useEffect(() => {
    if (existingEvent) {
      setInputEmail(existingEvent.userEmail!);
      setInputSubject(existingEvent.subject);
      dispatch(setAttendees(existingEvent.attendees));
    }

    dispatch(getUsers())
  }, [])

  const deleteEventExistingEvent = (id: string) => {
    dispatch(deleteEvent(id))
    .unwrap()
    .then(() => {
      setVisibility(false)
      getNextEventFunction()
    })
  }

  const handleSubmit = () => {

    if (!inputEmail && !inputSubject) return;
    if (!start && !end) return;

    const newReservation: IEvent = {
      userEmail: inputEmail!,
      subject: inputSubject,
      start: start!.toString(),
      end: end!.toString(),
      attendees,
      agenda,
      presenters: [],
      elementId: +new Date()
    };

    // These 2 dispatches might be unecessary 
    dispatch(setUserEmail(inputEmail));
    dispatch(setSubject(inputSubject));

    dispatch(postEvents(newReservation));
    dispatch(clearReservation({}));
    setVisibility(false);
  }

  return (
    <>
      <Dialog fullScreen={hasReachedBp} maxWidth="xl" open={visibility}>
        <Box sx={hasReachedBp ? {display: "flex", flexDirection: "column", pr: "40px"} : {
          display: "flex",
          flexDirection: "row"
        }}>
          <DialogContent sx={hasReachedBp ? {width: "100%"} : {width: "35%", pr: 0}}>
            <DialogTitle sx={{display: "grid", placeItems: "center", gap: 1, pr: 0}}>
              <LockIcon/>
              <Typography fontSize="1.5rem">{existingEvent ? "View reservation" : "Create New Reservation"}</Typography>
            </DialogTitle>
            <Stack>
              <Box sx={{display: "flex", flexDirection: "column", mb: "0.5rem"}}>
                <FormControl>
                  <Autocomplete value={inputEmail}
                                disabled={!!existingEvent}
                                onChange={onEmailFieldChange}
                                renderInput={(params) => <TextField {...params} margin="dense" label="Email"/>}
                                options={users.map((user) => user.email)}/>
                  <TextField disabled={!!existingEvent} value={inputSubject} onChange={onSubjectFieldChange}
                             label="Meeting Subject"
                             margin="dense"/>
                </FormControl>
                <DateTimeValidation existingEvent={existingEvent}/>
              </Box>

              <DialogActions sx={{p: 0}}>

                <Button sx={{color: "#171717", border: "1px solid #171717"}} variant="outlined" fullWidth
                        endIcon={<AddCircleOutlineOutlined/>}
                        onClick={handleAttendeesPopup}
                >
                  <Box sx={{display: "flex", flexDirection: "column", width: "100%",}}>
                    <Typography component="p" fontSize="1rem">{existingEvent ? "View" : "Add"}</Typography>
                    <Typography component="p" fontSize="1rem">Attendees</Typography>
                  </Box>
                </Button>
                <Button sx={{color: "#171717", border: "1px solid #171717"}} variant="outlined" fullWidth
                        endIcon={<Toc sx={{rotate: "180deg", ml: "auto"}}/>}
                        onClick={hanldeAgendaPopup}
                >
                  <Box sx={{display: "flex", flexDirection: "column", width: "100%"}}

                  >
                    <Typography component="p" fontSize="1rem">{existingEvent ? "View" : "Add"}</Typography>
                    <Typography component="p" fontSize="1rem">Agenda</Typography>
                  </Box>
                </Button>
              </DialogActions>

              <DialogActions sx={{p: 0, mt: "1.5rem"}}>
                <Button variant="contained" color="error" fullWidth onClick={() => setVisibility(false)}>Close</Button>
                {existingEvent

                  ? <Button variant="contained" color="error" fullWidth
                            onClick={() => deleteEventExistingEvent(existingEvent.id!)}>Delete</Button>
                  :
                  <Button variant="contained" color="primary" fullWidth onClick={() => handleSubmit()}>Confirm</Button>
                }
              </DialogActions>
            </Stack>
          </DialogContent>
          <DialogContent sx={hasReachedBp ? {width: "100%", height: "40vh", maxHeight: "100%"} : {width: "25%"}}>
            <Calendar/>
          </DialogContent>
        </Box>
      </Dialog>

      {showAttendees && (
        <AddAttendees showAttendees={showAttendees} setShowAttendees={setShowAttendees}
                      existingEvent={existingEvent}/>)}

      {showAgenda && (
        <AddTopics showAgenda={showAgenda} setShowAgenda={setShowAgenda} existingEvent={existingEvent}/>
      )}

    </>
  );
}

export default CreateMeetingReservation;
