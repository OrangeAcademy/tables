// MUI Imports
import {ThemeProvider} from "@emotion/react";

// Style - breakpoints
import {bookMeetBreakpoints} from "./BookMeeting.bp";


// Local imports
import BackgroundContainer from './BackgroundContainer/Main';
import ButtonMeeting from './ScheduleMeeting/Main';
import MeetingDurationButtons from './BookMeetDuration/Main';
import ReportIssue from './ReportIssue/Main';
import Timer from './Timer/Main';
import Title from './Title/Main';


const BookMeeting = () => {

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
