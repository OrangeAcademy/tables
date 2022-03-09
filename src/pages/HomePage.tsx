import BookMeeting from "./BookMeeting";
import ViewMeeting from "./ViewMeeting";

import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useState, useEffect, useCallback } from "react";

import dayjs from "dayjs";
import { setState } from "../redux/slices/stateRoomSlice";
import {getClosestEvent, isEventRunningNow} from "../utils/events.utils";




const HomePage = () => {

  // Redux
  const dispatch = useAppDispatch();
  const isBusyRoom = useAppSelector((state) => state.stateRoom.value);
  const nextEvent = useAppSelector(state => state.upcomingEvent);

  // Component state
  const [time, setTime] = useState<number>(0);
  const isRoomBusy = dayjs().isBetween(dayjs(nextEvent.start), dayjs(nextEvent.end));
  const [eventIsRunning, setEventIsRunning] = useState(false);

    // Get time till next meeting
  const nextMeetingStart = dayjs(useAppSelector(state => state.upcomingEvent.start));
  const minutesTillNextMeeting = dayjs(nextMeetingStart).diff(dayjs(), 'minutes');

    // Checks if there are less than 15 minutes till the next meeting
  const isLessThan15Mins = minutesTillNextMeeting < 15;
  
  // Sets meeting room availability to false if room is occupied (busy), to true if available
  const busyRoom = dayjs().isBetween(dayjs(nextEvent.start), dayjs(nextEvent.end));
  const storeRoomState = useCallback(() => {
    dispatch(setState(busyRoom));
  }, [dispatch, busyRoom])

  const secondsTillNextEvent = useCallback(() => {   
    if (!nextEvent.end) setTime(0);
    if (isRoomBusy) setTime(dayjs(nextEvent.end).diff(dayjs(), 's'));
    return setTime(dayjs(nextEvent.start).diff(dayjs(), 's'))
  }, [isRoomBusy])


  useEffect(() => { 
    getClosestEvent();
    storeRoomState();
    isEventRunningNow().then(value => setEventIsRunning(value))
    secondsTillNextEvent();
  }, [storeRoomState, secondsTillNextEvent]);


  return (
    <>
    {
      (eventIsRunning && isLessThan15Mins)
      ? <ViewMeeting isBusy={isBusyRoom} upcomingEvent={nextEvent} seconds={time} timeFunction={secondsTillNextEvent}/>
      : <BookMeeting />
    }
    </>
  )
}

export default HomePage;