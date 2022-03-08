import {useEffect, useState} from "react";
import dayjs from "dayjs";

// MUI Imports
import {ThemeProvider} from "@emotion/react";

// Style - breakpoints
import {bookMeetBreakpoints} from "./BookMeeting.bp";

// REDUX
import { useAppSelector } from "../redux/hooks/hooks";


// Local imports
import BackgroundContainer from '../components/BookMeeting/BackgroundContainer/Main';
import ButtonMeeting from '../components/BookMeeting/ScheduleMeeting/Main';
import MeetingDurationButtons from '../components/BookMeeting/BookMeetDuration/Main';
import ReportIssue from '../components/BookMeeting/ReportIssue/Main';
import Timer from '../components/BookMeeting/Timer/Main';
import Title from '../components/BookMeeting/Title/Main';


const BookMeeting = () => {
  const nextMeetingStart = useAppSelector(state => state.upcomingEvent.start);
  const [ timeToNextMeeting, setTimeToNextMeeting ] = useState(dayjs().diff(nextMeetingStart) || 0);

  useEffect(() => {
    const timeTillNextMeeting = setInterval(() => {
      if(timeToNextMeeting > 0) setTimeToNextMeeting(timeToNextMeeting - 1);
    }, 1000)

    return () => clearInterval(timeTillNextMeeting);
  }, [])


  return (
    <ThemeProvider theme={bookMeetBreakpoints}>
      <BackgroundContainer>
        <Timer/>
        <Title location="Orange {kITchen}" meetingRoom="Agora"/>
        <MeetingDurationButtons/>
        <ButtonMeeting/>
        <ReportIssue/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default BookMeeting;
