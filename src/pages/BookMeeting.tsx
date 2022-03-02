import React from "react";
import { ThemeProvider } from "@emotion/react";
import { bookMeetBreakpoints } from "./BookMeeting.bp";
import BackgroundContainer from 'components/BookMeeting/BackgroundContainer/Main';
import ButtonMeeting from 'components/BookMeeting/ScheduleMeeting/Main';
import MeetingDurationButtons from 'components/BookMeeting/BookMeetDuration/Main';
import ReportIssue from 'components/BookMeeting/ReportIssue/Main';
import Timer from 'components/BookMeeting/Timer/Main';
import Title from 'components/BookMeeting/Title/Main';


const BookMeeting = () => {
  return (
    <ThemeProvider theme={bookMeetBreakpoints}>
      <BackgroundContainer>
        <Timer />
        <Title location={"Orange {kITchen}"} meetingRoom={"Agora"} isRoomAvailable={true}/>
        <MeetingDurationButtons />
        <ButtonMeeting />
        <ReportIssue />
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default BookMeeting;
