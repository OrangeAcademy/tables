
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
// import { useNavigate} from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IsLessThan15MinsSelector, roomStatusSelector } from "store/StateRoom/selectors";

const BookMeeting = ({ seconds, timeFunction}: MeetingDetails) => {
  const dispatch = useDispatch();
  const [localSeconds, setLocalSeconds] = useState(seconds);
  const IsLessThan15Mins = useSelector(IsLessThan15MinsSelector);
  const isBusy = useSelector(roomStatusSelector);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalSeconds(localSeconds - 1);

    }, 1000);
    return () => clearInterval(interval)
  }, [dispatch, localSeconds])

  // const navigate = useNavigate();
  
  useEffect(() => {
    
    if(IsLessThan15Mins || isBusy) {
      timeFunction(isBusy);
      // navigate('/view');
    }


  }, [IsLessThan15Mins, isBusy, timeFunction])


  return (
    <ThemeProvider theme={bookMeetBreakpoints}>
      <BackgroundContainer>
        <Timer/>
        <Title />
        <MeetingDurationButtons localSeconds={localSeconds}/>
        <ButtonMeeting/>
        <ReportIssue/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default BookMeeting;
