// React imports
import { useState, useEffect, useCallback, useMemo } from "react";

//Dayjs imports
import dayjs from "dayjs";

// Redux Imports
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { setState } from "../redux/slices/stateRoomSlice";
import { useSelector } from "react-redux";

//Interfaces
import { IEvent } from "../interfaces/Event";

// Utils
import {getClosestEvent, isEventRunningNow, getRunningEvent} from "../utils/events.utils";

// Components imports
import BookMeeting from "./BookMeeting";
import ViewMeeting from "./ViewMeeting";


const HomePage = () => {

  // Redux
  const dispatch = useAppDispatch();
  const nextEvent = useAppSelector(state => state.upcomingEvent);
  const nextMeetingStart = dayjs(useAppSelector(state => state.upcomingEvent.start));

  // Component state
  const isRoomBusy = dayjs().isBetween(dayjs(nextEvent.start), dayjs(nextEvent.end));
  const [time, setTime] = useState<number>(0);
  const [eventIsRunning, setEventIsRunning] = useState(false);
  const [runningEvent, setRunningEvent] = useState<IEvent | undefined>(undefined);

    // Get time till next meeting
  const minutesTillNextMeeting = dayjs(nextMeetingStart).diff(dayjs(), 'minutes');

    // Checks if there are 15 minutes left till the next meeting
  const isLessThan15Mins = useMemo(() =>  nextEvent.start && minutesTillNextMeeting < 15, [minutesTillNextMeeting, nextEvent.start]);

  console.log("minutesTillNextMeeting::::::::::::", isLessThan15Mins)
  
  // Sets meeting room availability to false if room is occupied (busy), to true if available
  const busyRoom = dayjs().isBetween(dayjs(nextEvent.start), dayjs(nextEvent.end));
  const storeRoomState = useCallback(() => dispatch(setState(busyRoom)), [])

  const secondsTillNextEvent = useCallback(async () => {   
    if(nextEvent.start && nextEvent.end) {
      console.log('END:::::', dayjs(nextEvent.end).diff(dayjs(), 's') );
      console.log('START:::::', dayjs(nextEvent.start).diff(dayjs(), 's') );


      if (isRoomBusy) setTime(dayjs(nextEvent.end).diff(dayjs(), 's'));
  
      if (!isRoomBusy) setTime(dayjs(nextEvent.start).diff(dayjs(), 's'));
    }

  }, [nextEvent, isRoomBusy])

  const setRoomStatus = async() => {
    const isEventRunning = await isEventRunningNow()
    return setEventIsRunning(isEventRunning)
  }


  const upcomingEvent = useCallback(async () => {
    /* If room is occupied (there's an ongoing meeting) */
    if(isRoomBusy) {
      //    Set the upcoming event to the one running now
      await getRunningEvent().then(value => setRunningEvent(value));
    } else {
      //    Set the upcoming event to the closest event from now 
      await getClosestEvent().then(value => setRunningEvent(value));
    }
  }, [])


  /*
  ----------------------------------------
    Interval state triggers
  ----------------------------------------

  */

  useEffect(() => {
    const interval = setInterval( () => upcomingEvent(), 10000);
    return () => clearInterval(interval);
  }, [])



  /*
  ----------------------------------------
    Initial state triggers
  ----------------------------------------

  */
  useEffect(() => { 

    // Stores a boolean value if room is available or busy
    upcomingEvent();
    storeRoomState(); // Alexandrina Sobol
    setRoomStatus(); // Cuja Mihai

    secondsTillNextEvent(); 

  }, []);

  console.log('IS ROOM BUSY::::::', !isRoomBusy);
  console.log("isLessThan15Mins:::::::::",isLessThan15Mins)

  return (
    <>
    {
      isRoomBusy || isLessThan15Mins
      ? <ViewMeeting isBusy={eventIsRunning} upcomingEvent={runningEvent || nextEvent} seconds={time} timeFunction={secondsTillNextEvent}/>
      : <BookMeeting />
    }
    </>
  )
}

export default HomePage;