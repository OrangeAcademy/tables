
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

import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { setAutoBookDuration, setShouldAutoBook } from "store/StateRoom/stateRoomSlice";

const BookMeeting = () => {
  const dispatch = useDispatch();

    // Dispatches for RESETTING the autobookConfig in Redux
    const resetAutobookConfig = useCallback(() => {
      dispatch(setAutoBookDuration(null))
      dispatch(setShouldAutoBook(false));
    }, [dispatch])

  useEffect(() => {

    return () => resetAutobookConfig();
  }, [resetAutobookConfig])

  return (
    <ThemeProvider theme={bookMeetBreakpoints}>
      <BackgroundContainer>
        <Timer/>
        <Title />
        <MeetingDurationButtons />
        <ButtonMeeting/>
        <ReportIssue/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default BookMeeting;