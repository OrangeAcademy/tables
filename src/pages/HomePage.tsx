import BookMeeting from "./BookMeeting";
import ViewMeeting from "./ViewMeeting";

import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useState, useEffect, useCallback } from "react";

import dayjs from "dayjs";
import { setState } from "../redux/slices/stateRoomSlice";
import getClosestEvent from "../utils/events.utils";




const HomePage = () => {

  // Redux
  const dispatch = useAppDispatch();
  const isBusyRoom = useAppSelector((state) => state.stateRoom.value);
  const nextEvent = useAppSelector(state => state.upcomingEvent);

  // Component state
  const [time, setTime] = useState<number>(0);
  const isRoomBusy = dayjs().isBetween(dayjs(nextEvent.start), dayjs(nextEvent.end));

  
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

  // Get time till next meeting
  const nextMeetingStart = dayjs(useAppSelector(state => state.upcomingEvent.start));
  const minutesTillNextMeeting = useCallback(() => nextMeetingStart.diff(dayjs(), 'minutes'), []);

  useEffect(() => { 
    getClosestEvent();
    storeRoomState();
    secondsTillNextEvent();
    minutesTillNextMeeting();
  }, [storeRoomState, secondsTillNextEvent, minutesTillNextMeeting]);




  const isLessThan15Mins = +minutesTillNextMeeting < 15;
  console.log(isLessThan15Mins);

  return (
    <>
    {
      (!isRoomBusy && isLessThan15Mins)
      ? <ViewMeeting isBusy={isBusyRoom} upcomingEvent={nextEvent} seconds={time} timeFunction={secondsTillNextEvent}/>
      : <BookMeeting />
    }
    </>
  )
}

export default HomePage;