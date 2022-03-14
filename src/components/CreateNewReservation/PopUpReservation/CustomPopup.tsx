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

import React, {useMemo, useCallback, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEvents, postEvents} from "store/Event/actionCreators";
import {clearReservation, NewMeeting, setSubject, setUserEmail, setAttendees} from "store/NewMeeting/newMeeting";
import {meetingSelector} from "store/NewMeeting/selectors";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {deleteEvent} from "store/Event/actionCreators";
import {SERVER_EVENTS_ROUTE} from "constants/paths";

import DateTimeValidation from "../DateTimePicker/DateTimePickerRange";
import ErrorSnackbar from "../../AddTopics/ErrorSnackbar";
import {eventsSelector} from "../../../store/Event/selectors";
import {isWithinInterval} from "date-fns";

import {IEvent} from "models/Event";
import {storeUpcomingEvent, setNextEventStart} from "store/StateRoom/stateRoomSlice";
import {getClosestEvent} from "utils/events.utils";
import {getUsers} from "../../../store/User/actionCreators";
import {usersSelector} from "../../../store/User/selectors";

interface ICreateMeetingReservation {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  existingEvent?: IEvent | undefined;
  getNextEventFunction?: any;
}

const LockIcon = styled(LockOutlined)({
  color: "white",
  backgroundColor: '#3d4fb2',
  borderRadius: "50%",
  border: '0.5rem solid #3d4fb2',
  width: "2rem",
  height: "2rem"
});


const CreateMeetingReservation = (
  {
    visibility,
    setVisibility,
    existingEvent,
    getNextEventFunction
  }: ICreateMeetingReservation) => {
  // Theme
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('md'));

  // State
  const [showAgenda, setShowAgenda] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);

  // Handlers
  const hanldeAgendaPopup = () => setShowAgenda(!showAgenda);
  const handleAttendeesPopup = () => setShowAttendees(!showAttendees);
  const eventsCalendar = useSelector(eventsSelector);
  const {start, end, attendees, presenters} = useSelector(meetingSelector);

  const isConfirmDisabled = useMemo(() => {
    if (start && end) {
      return eventsCalendar.some(
        (el) =>
          isWithinInterval(new Date(start), {start: new Date(el.start), end: new Date(el.end)}) ||
          isWithinInterval(new Date(end), {start: new Date(el.start), end: new Date(el.end)}) ||
          isWithinInterval(new Date(el.start), {start: new Date(start), end: new Date(end)}) ||
          isWithinInterval(new Date(el.end), {start: new Date(start), end: new Date(end)})
      );
    }

  }, [start, end, eventsCalendar]);

  const [inputEmail, setInputEmail] = useState<string | null>(null);
  const [inputSubject, setInputSubject] = useState("");
  const [errorEmail, setErrorEmail] = useState<{ inputEmail: string }>();
  const [errorSubject, setErrorSubject] = useState<{ inputSubject: string }>();
  const [inputError, setInputError] = useState(false);

  const dispatch = useAppDispatch();
  const users = useSelector(usersSelector);

  const errorMessage = {
    emptyField: "Please make sure all fields are completed!",
  };


  const onEmailFieldChange = (_event: any, newValue: any) => {
    setInputEmail(newValue);
    setErrorEmail({inputEmail: ''});
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let regular = regex.test(newValue);
    if (!regular) {
      setErrorEmail({inputEmail: 'Invalid email'});
    }
    // dispatch(setUserEmail(event.target.value));
  };


  const onSubjectFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    const {target: {value}} = event;
    setErrorSubject({inputSubject: ''});
    setInputSubject(value);
    if (value.length < 6) {
      setErrorSubject({inputSubject: 'Minimum 6 characters'});
    }

  };

  const GetUpcomingEvent = useCallback(() => {
    setTimeout(async () => {
      const events = await (await fetch(SERVER_EVENTS_ROUTE)).json();
      const nextMeeting = await getClosestEvent({events});

      try{
        dispatch(storeUpcomingEvent(nextMeeting));

        dispatch(setNextEventStart(nextMeeting.start));
      } catch(e) {
        console.log('No events');
      }

      return nextMeeting;
    }, 1000);
  }, [dispatch])

  const handleSubmit = () => {

    if (!inputEmail || !inputSubject) {
      setInputError(true);
      return;
    }

    const newReservation: NewMeeting = {
      userEmail: inputEmail,
      subject: inputSubject,
      topic: inputSubject,
      presenter: inputEmail,
      start: start!.toString(),
      end: end!.toString(),
      attendees,
      presenters,
    };

    // These 2 dispatches might be unecessary
    dispatch(setUserEmail(inputEmail));
    dispatch(setSubject(inputSubject));

    dispatch(postEvents(newReservation));
    dispatch(getEvents());
    GetUpcomingEvent();
    setVisibility(false);
 
  };

  useEffect(() => {
    if (existingEvent) {
      setInputEmail(existingEvent.userEmail!);
      setInputSubject(existingEvent.subject);
      dispatch(setAttendees(existingEvent.attendees));
    }

    dispatch(getUsers());
    dispatch(getEvents());
    GetUpcomingEvent();

  }, [])

  useEffect(() => {
    dispatch(clearReservation({}));

  }, [dispatch]);

  const deleteEventExistingEvent = (id: string) => {
    dispatch(deleteEvent(id))
      .unwrap()
      .then(() => {
        setVisibility(false);
        getNextEventFunction();
        window.location.reload();
      })
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
                  <TextField value={inputSubject}
                             disabled={!!existingEvent}
                             error={Boolean(errorSubject?.inputSubject)}
                             helperText={(errorSubject?.inputSubject)}
                             onChange={onSubjectFieldChange}
                             label="Meeting Subject" margin="dense"/>
                </FormControl>
                <DateTimeValidation />
              </Box>

              <DialogActions sx={{p: 0}}>

                <Button sx={{color: "#171717", border: "1px solid #171717"}} variant="outlined"
                        fullWidth
                        endIcon={<AddCircleOutlineOutlined/>}
                        onClick={handleAttendeesPopup}
                >
                  <Box sx={{display: "flex", flexDirection: "column", width: "100%",}}>
                    <Typography component="p" fontSize="1rem">{existingEvent ? "View" : "Add"}</Typography>
                    <Typography component="p" fontSize="1rem">Attendees</Typography>
                  </Box>
                </Button>
                <Button sx={{color: "#171717", border: "1px solid #171717"}} variant="outlined"
                        fullWidth
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
                <Button variant="contained" color="error" fullWidth
                        onClick={() => setVisibility(false)}>Close</Button>
                {existingEvent
                  ? <Button variant="contained" color="error" fullWidth
                            onClick={() => deleteEventExistingEvent(existingEvent.id!)}>Delete</Button>
                  :
                  <Button variant="contained" disabled={isConfirmDisabled} color="primary" fullWidth onClick={() => handleSubmit()}>Confirm</Button>
                }
              </DialogActions>
            </Stack>
          </DialogContent>
          <DialogContent
            sx={hasReachedBp ? {width: "100%", height: "40vh", maxHeight: "100%"} : {width: "25%"}}>
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
      <ErrorSnackbar
        visibility={inputError}
        setVisibility={setInputError}
        message={errorMessage.emptyField}/>
    </>
  );
};

export default CreateMeetingReservation;
