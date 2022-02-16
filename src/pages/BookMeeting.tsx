import React from "react";

// Local imports
import BackgroundContainer from '../components/BookMeeting/BackgroundContainer/Main';
import MeetingDurationButtons from '../components/BookMeeting/BookMeetDuration/Main';
import ReportIssue from '../components/BookMeeting/ReportIssue/Main';
import ButtonMeeting from '../components/BookMeeting/ScheduleMeeting/ButtonMeeting';
import Timer from '../components/BookMeeting/Timer/Main';
import Title from '../components/BookMeeting/Title/Main';
 

const BookMeeting = () => {
  return (
    <BackgroundContainer>
      <Timer />
      <Title location={"Orange {kITchen}"} meetingRoom={"Agora"} isRoomAvailable={true}/>
      <MeetingDurationButtons />
      <ButtonMeeting />
      <ReportIssue />
    </BackgroundContainer>
  );
};

export default BookMeeting;
