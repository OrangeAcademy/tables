import dayjs from "dayjs";
import { useAppDispatch } from "hooks/redux";
import { IEvent, IPresenters } from "models/Event";
import React, { useCallback, useEffect, useState } from 'react'
import {  useSelector } from "react-redux";
import { getEvents } from "store/Event/actionCreators";
import { nextEventStartSelector, roomStatusSelector, nextEventEndSelector, IsLessThan15MinsSelector } from "store/StateRoom/selectors";
import {  setIsLessThan15Mins, setNextEventStart, setRoomStatus, storeUpcomingEvent } from "store/StateRoom/stateRoomSlice";
import { getClosestEvent } from "utils/events.utils";
import BookMeeting from "./BookMeeting";
import ViewMeeting from "./ViewMeeting";



const controller = new AbortController();
const upcomingEventInit = {
  elementId: 0,
  end: "",
  occurrencesEnd: "",
  start: "",
  subject: "",
  agenda: [],
  presenters: Array<IPresenters>({
    presenter: "",
    topic: ""
  }),
  attendees: Array<string>("")
}

function HomePage() {
  const currentDay = dayjs();
  const dispatch = useAppDispatch();
  const eventStartTime = useSelector(nextEventStartSelector);
  const isBusyRoom = useSelector(roomStatusSelector);
  const [nextUpdate, setNextUpdate] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent>(upcomingEventInit);

  const endTimeNextEvent = useSelector(nextEventEndSelector);
  const startTimeNextEvent = useSelector(nextEventStartSelector);

  const StateOfRoom = useCallback(() => {
    try{
      const busyRoom = currentDay.isBetween(dayjs(startTimeNextEvent), dayjs(endTimeNextEvent));
      dispatch(setRoomStatus(busyRoom));
      return busyRoom;
    } catch(e) {
      console.error(e);
      return false;
    }
  }, [currentDay, dispatch, endTimeNextEvent, startTimeNextEvent])

  const NextUpdate = useCallback((isBusy: boolean) => {
    if (!isBusy) {
      setNextUpdate(upcomingEvent.start);
    } else {
      setNextUpdate(upcomingEvent.end);
    }
  }, [upcomingEvent?.end, upcomingEvent?.start])

  const UpdateTime = useCallback((isBusy: boolean) => {
    const currentDay = dayjs();
    if (!upcomingEvent)
      setTime(0);
    if (isBusy && endTimeNextEvent) {
      setTime(dayjs(endTimeNextEvent).diff(currentDay, 'seconds'));
      
    } else if(!isBusy && startTimeNextEvent) {
      setTime(dayjs(startTimeNextEvent).diff(currentDay, 'seconds'))
    }
  },[endTimeNextEvent, startTimeNextEvent, upcomingEvent])



  const GetUpcomingEvent = useCallback(async () => {
    try {
      const events: IEvent[] = await dispatch(getEvents()).unwrap();
      const nextMeeting = await getClosestEvent({ events });
  
      setUpcomingEvent(nextMeeting);
      dispatch(storeUpcomingEvent(nextMeeting));
      dispatch(setNextEventStart(nextMeeting.start));
  
      return nextMeeting;
    } catch (e) {
      console.log("No upcoming meetings. ");
    } 

  },[dispatch])

  useEffect(() => {
    GetUpcomingEvent()

    return () => controller.abort()
  }, [GetUpcomingEvent])

  useEffect(() => {
    if (upcomingEvent === undefined)
      return;
    let isBusy = StateOfRoom()
    NextUpdate(isBusy)
    UpdateTime(isBusy)
  }, [NextUpdate, StateOfRoom, UpdateTime, upcomingEvent])

  useEffect(() => {
    const interval = setInterval(() => {
      let currentHour = dayjs();
      if (currentHour.diff(nextUpdate, 's') >= 0) {
        GetUpcomingEvent()
      }
    }, 1000);
    return () => clearInterval(interval);

  }, [GetUpcomingEvent, nextUpdate]);


  const checkIfBusy = useCallback(() => {
    if(!eventStartTime) return ;

    const tillEventStart = dayjs(eventStartTime).diff(dayjs(), "seconds");

    if( tillEventStart < (15 * 60)) {
      dispatch(setIsLessThan15Mins(true));
    } else if( tillEventStart >= (15 * 60)){
      dispatch(setIsLessThan15Mins(false));
    }

    if(tillEventStart <= 0) {
      dispatch(setRoomStatus(true));
    } else {
      dispatch(setRoomStatus(false));
    }


     
  }, [dispatch, eventStartTime])

  useEffect(() => {
    checkIfBusy();

  }, [checkIfBusy, time])

  const isLessThan15Mins = useSelector(IsLessThan15MinsSelector);


  return (
    <div>
      { (isLessThan15Mins || isBusyRoom) 
        ? <ViewMeeting isBusy={isBusyRoom} upcomingEvent={upcomingEvent} seconds={time} timeFunction={UpdateTime} getNextEventFunction={GetUpcomingEvent}/>
        : <BookMeeting />
      }

    </div>
  )
}



export default HomePage;