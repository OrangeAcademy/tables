import React, {useEffect, useState} from "react";
import Calendar from "../components/ViewMeeting/Calendar/Calendar";
import BackgroundContainer from "../components/ViewMeeting/Containers/BackgroundContainer";
import CircularTimerFunction from "../components/ViewMeeting/CircularTimer/CircularTimerFunction";
import ContentContainer from "../components/ViewMeeting/Containers/ContentContainer";
import StateInfo from "../components/ViewMeeting/StateInfo/StateInfo";
import Details from "../components/ViewMeeting/Details/Details";
import EndButton from "../components/ViewMeeting/EndButton/EndButton";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../components/ViewMeeting/theme/Theme"
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";
import dayjs from "dayjs";
import {setBusy, setFree} from "../redux/slices/stateRoom";
import {changeTime} from "../redux/slices/timeSlices"

const ViewMeeting = () => {
  const eventsCalendar = useAppSelector((state) => state.events.events);
  const isBusyRoom = useAppSelector((state) => state.stateRoom.value);
  const [nextUpdate, setNextUpdate] = useState<string>("");
  const dispatch = useAppDispatch();
  const time = useAppSelector(state => state.time.value);

  useEffect(() => {
    SetStateOfRoom()
    SetNextUpdate()
    setTimer()
  }, [isBusyRoom]);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentHour = dayjs();
      if (currentHour.diff(nextUpdate, 's') === 0) {
        SetStateOfRoom()
        SetNextUpdate()
        setTimer()
      }
    }, 1000);
    return () => clearInterval(interval);

  }, [nextUpdate]);

  const FindUpcomingEvents = () => {
    let currentDay = dayjs();
    let upcomingEvents = eventsCalendar.filter(event =>
      dayjs(event.start).isAfter(currentDay) || dayjs(event.end).isAfter(currentDay));

    let selectedEvent = upcomingEvents[0];

    for (let data of upcomingEvents) {
      if (currentDay.isBetween(dayjs(data.start), dayjs(data.end))) {
        return data;
      }
      if (dayjs(selectedEvent.start).isAfter(dayjs(data.start))) {
        selectedEvent = data;
      }
    }

    return selectedEvent;
  }

  const SetStateOfRoom = () => {
    let currentDay = dayjs();
    const upcomingEvent = FindUpcomingEvents();
    if (currentDay.isBetween(dayjs(upcomingEvent.start), dayjs(upcomingEvent.end))) {
      dispatch(setBusy())
    } else {
      dispatch(setFree())
    }

    return isBusyRoom
  }

  const SetNextUpdate = () => {
    const upcomingEvent = FindUpcomingEvents();
    if (isBusyRoom !== true) {
      setNextUpdate(upcomingEvent.start);
    } else {
      setNextUpdate(upcomingEvent.end);

    }
  };


  const setTimer = () => {
    let currentDay = dayjs();
    const upcomingEvent = FindUpcomingEvents();
    if(isBusyRoom){
      console.log("1")
      dispatch(changeTime(dayjs(upcomingEvent.end).diff(currentDay, 's')))
    }
    else {
      console.log("2")
      dispatch(changeTime(dayjs(upcomingEvent.start).diff(currentDay, 's' )))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <ContentContainer>
          <StateInfo isBusy={isBusyRoom}/>
          <CircularTimerFunction time={time}/>
          <Details isBusy={isBusyRoom}/>
          <EndButton isBusy={isBusyRoom}/>
        </ContentContainer>
        <Calendar/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};
export default ViewMeeting;
