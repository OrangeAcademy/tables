// React imports
import { useState, useEffect, useCallback, useMemo } from "react";


//Dayjs imports
import dayjs from "dayjs";

// Redux Imports
import {  useAppSelector } from "../redux/hooks/hooks";

//Interfaces
import { IEvent } from "../interfaces/Event";

// Utils
import {getClosestEvent, isEventRunningNow, getRunningEvent} from "../utils/events.utils";

// Components imports
import BookMeeting from "../components/BookMeeting/BookMeeting";
import ViewMeeting from "../components/ViewMeeting/ViewMeeting";


const HomePage = () => {

  // Fetch abort
  const controller = new AbortController();

  // Redux
  const nextEvent = useAppSelector(state => state.upcomingEvent);
  const nextMeetingStart = dayjs(useAppSelector(state => state.upcomingEvent.start));

  // Component state
  const [meetingDuration, setMeetingDuration] = useState(0);
  const [eventIsRunning, setEventIsRunning] = useState(false);
  const [runningEvent, setRunningEvent] = useState<IEvent | undefined>(undefined);

    // Get time till next meeting
  const minutesTillNextMeeting = dayjs(nextMeetingStart).diff(dayjs(), 'minutes');

    // Checks if there are 15 minutes left till the next meeting
  const isLessThan15Mins = useMemo(() =>  nextEvent.start && minutesTillNextMeeting < 15 ? true : false, [minutesTillNextMeeting, nextEvent.start]);
 
  const secondsTillNextEvent = useCallback(async () => {   

    if(nextEvent.start && nextEvent.end) {
      if (eventIsRunning) setMeetingDuration(dayjs(nextEvent.end).diff(dayjs(), 's'));
      if (!eventIsRunning) setMeetingDuration(dayjs(nextEvent.start).diff(dayjs(), 's'));
    } else  {
      setMeetingDuration(dayjs(runningEvent?.start).diff(dayjs(), 's') || 600);
    }

  }, [])

  const setRoomStatus = async() => {
    const isEventRunning = await isEventRunningNow();
    return isEventRunning ? setEventIsRunning(true) : setEventIsRunning(false);
  }



  const upcomingEvent = useCallback(async () => {
    /* If room is occupied (there's an ongoing meeting) */
    if(eventIsRunning) {
      try{
        //    Set the upcoming event to the one running now
       await getRunningEvent()
        .then(value => setRunningEvent(value))
    
        
      } catch(e){
        console.error('ENCOUNTERED ERROR AT upcomingEvent: ', e)
        throw Error;
      }

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
    return () => {
      controller.abort();
      clearInterval(interval)
    };
  }, [])



  /*
  ----------------------------------------
    Initial state triggers
  ----------------------------------------

  */
  useEffect(() => { 

    // Stores a boolean value if room is available or busy
    upcomingEvent();
    secondsTillNextEvent(); 
    setRoomStatus();

    return () => controller.abort();

  }, []);

 
  return (
    <>
    {
      eventIsRunning || isLessThan15Mins
      ? <ViewMeeting isBusy={eventIsRunning} upcomingEvent={runningEvent || nextEvent} seconds={meetingDuration} timeFunction={secondsTillNextEvent}/>
      : <BookMeeting />
    }
    </>
  )
}

export default HomePage;