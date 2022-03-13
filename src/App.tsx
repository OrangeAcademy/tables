
import {useCallback, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import dayjs from "dayjs";
import {IEvent, IPresenters} from "./models/Event";
import {getEvents} from "./store/Event/actionCreators";
import {setRoomStatus, storeUpcomingEvent, setNextEventStart, setIsLessThan15Mins} from "./store/StateRoom/stateRoomSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";

// Local imports

import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";
import PageNotFound from "./pages/404";

import { getClosestEvent } from "./utils/events.utils";
import { useSelector } from "react-redux";
import { nextEventStartSelector, roomStatusSelector } from "store/StateRoom/selectors";


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

function App() {
  const currentDay = dayjs();
  const dispatch = useAppDispatch();
  const eventStartTime = useSelector(nextEventStartSelector);
  const isBusyRoom = useSelector(roomStatusSelector);
  const [nextUpdate, setNextUpdate] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent>(upcomingEventInit);
  const startTimeOfNextEvent = dayjs(useSelector(nextEventStartSelector)).diff(dayjs(), "seconds");
  
  const StateOfRoom = useCallback(() => {
    const busyRoom = currentDay.isBetween(dayjs(upcomingEvent.start), dayjs(upcomingEvent.end));
    dispatch(setRoomStatus(busyRoom));
    return busyRoom;
  }, [currentDay, dispatch, upcomingEvent.end, upcomingEvent.start])

  const NextUpdate = useCallback((isBusy: boolean) => {
    if (!isBusy) {
      setNextUpdate(upcomingEvent.start);
    } else {
      setNextUpdate(upcomingEvent.end);
    }
  }, [upcomingEvent.end, upcomingEvent.start])

  const UpdateTime = useCallback((isBusy: boolean) => {
    const currentDay = dayjs();
    if (!upcomingEvent)
      setTime(0);
    if (isBusy) {
      setTime(dayjs(upcomingEvent.end).diff(currentDay, 's'));
      
    } else {
      setTime(dayjs(upcomingEvent.start).diff(currentDay, 's'))
    }
  },[upcomingEvent])



  const GetUpcomingEvent = useCallback(async () => {
    const events: IEvent[] = await dispatch(getEvents()).unwrap();
    const nextMeeting = await getClosestEvent({ events });

    setUpcomingEvent(nextMeeting);
    dispatch(storeUpcomingEvent(nextMeeting));
    dispatch(setNextEventStart(nextMeeting.start));

    return nextMeeting;
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

    const tillEventStart = dayjs(eventStartTime).diff(dayjs(), "minutes");

    if( tillEventStart <= 15) {
      dispatch(setIsLessThan15Mins(true));
    } else {
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
    setTime(startTimeOfNextEvent);
  }, [checkIfBusy])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting isBusy={isBusyRoom} seconds={time} timeFunction={UpdateTime}/>}/>
        <Route path="/view" element={<ViewMeeting isBusy={isBusyRoom} upcomingEvent={upcomingEvent} seconds={time} timeFunction={UpdateTime} getNextEventFunction={GetUpcomingEvent}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
