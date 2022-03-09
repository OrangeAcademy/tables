import React, {useEffect, useState} from "react";

// MUI Imports
import {ThemeProvider} from "@emotion/react";

// Style - breakpoints
import {bookMeetBreakpoints} from "./BookMeeting.bp";

// Local imports
import BackgroundContainer from '../components/BookMeeting/BackgroundContainer/Main';
import ButtonMeeting from '../components/BookMeeting/ScheduleMeeting/Main';
import MeetingDurationButtons from '../components/BookMeeting/BookMeetDuration/Main';
import ReportIssue from '../components/BookMeeting/ReportIssue/Main';
import Timer from '../components/BookMeeting/Timer/Main';
import Title from '../components/BookMeeting/Title/Main';
import {MeetingDetails} from "../interfaces/MeetingDetails";
import {Navigate} from "react-router";

const BookMeeting = ({isBusy, upcomingEvent, seconds, timeFunction}: MeetingDetails) => {
  let [localSeconds, setLocalSeconds] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalSeconds(localSeconds - 1);
    }, 1000);
    return () => clearInterval(interval)
  }, [localSeconds])

  if (upcomingEvent && (isBusy || localSeconds < (15 * 60))) {
    timeFunction(isBusy);
    return <Navigate to="/view"/>
  }
  return (
    <ThemeProvider theme={bookMeetBreakpoints}>
      <BackgroundContainer>
        <Timer/>
        <Title location={"Orange {kITchen}"} meetingRoom={"Agora"} isRoomAvailable={true}/>
        <MeetingDurationButtons localSeconds={localSeconds}/>
        <ButtonMeeting/>
        <ReportIssue/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default BookMeeting;
