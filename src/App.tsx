
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import dayjs from "dayjs";
import {IEvent, IPresenters} from "./models/Event";
import {getEvents} from "./store/Event/actionCreators";
import {setState} from "./store/StateRoom/stateRoomSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";

// Local imports

import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";
import PageNotFound from "./pages/404";
import PopUpMeeting from "./pages/PopUpMeeting";

import {FindUpcomingEvents} from "./utils/events.utils";
import {eventsSelector} from "./store/Event/selectors";
import {useSelector} from "react-redux";

function App() {
  const dispatch = useAppDispatch();
  const isBusyRoom = useAppSelector((state) => state.stateRoom.value);
  const events = useSelector(eventsSelector)
  const [nextUpdate, setNextUpdate] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  let currentDay = dayjs();

  const [upcomingEvent, setUpcomingEvent] = useState<IEvent>({
    elementId: 0,
    end: "",
    occurrencesEnd: "",
    start: "",
    subject: "",
    presenters: Array<IPresenters>({
      presenter: "",
      topic: ""
    }),
    attendees: Array<string>("")
  })

  const GetUpcomingEvent = () => {
    dispatch(getEvents())
      .unwrap()
      .then((originalPromiseResult) => {
        setUpcomingEvent(FindUpcomingEvents(originalPromiseResult))
      })
  }

  useEffect(() => {
    GetUpcomingEvent()
  }, [])

  useEffect(() => {
    if (upcomingEvent === undefined)
      return;
    let isBusy = StateOfRoom()
    NextUpdate(isBusy)
    UpdateTime(isBusy)
  }, [upcomingEvent])

  useEffect(() => {
    const interval = setInterval(() => {
      let currentHour = dayjs();
      if (currentHour.diff(nextUpdate, 's') >= 0) {
        GetUpcomingEvent()
      }
    }, 1000);
    return () => clearInterval(interval);

  }, [nextUpdate]);

  const StateOfRoom = () => {
    let busyRoom: boolean;
    busyRoom = currentDay.isBetween(dayjs(upcomingEvent.start), dayjs(upcomingEvent.end));
    dispatch(setState(busyRoom));
    return busyRoom;
  }

  const NextUpdate = (isBusy: boolean) => {
    if (!isBusy) {
      setNextUpdate(upcomingEvent.start);
    } else {
      setNextUpdate(upcomingEvent.end);
    }
  };

  const UpdateTime = (isBusy: boolean) => {
    if (!upcomingEvent)
      setTime(0);
    let currentDay = dayjs();
    if (isBusy) {
      setTime(dayjs(upcomingEvent.end).diff(currentDay, 's'));
    } else {
      setTime(dayjs(upcomingEvent.start).diff(currentDay, 's'))
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting isBusy={isBusyRoom} upcomingEvent={upcomingEvent} seconds={time} timeFunction={UpdateTime}/>}/>
        <Route path="/view" element={<ViewMeeting isBusy={isBusyRoom} upcomingEvent={upcomingEvent} seconds={time} timeFunction={UpdateTime} getNextEventFunction={GetUpcomingEvent}/>}/>
        <Route path="/meeting" element={<PopUpMeeting />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
