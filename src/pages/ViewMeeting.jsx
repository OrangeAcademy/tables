import React from "react";
import Calendar from "../components/ViewMeeting/Calendar/Calendar";
import BackgroundContainer from "../components/ViewMeeting/Containers/BackgroundContainer";
import CircularTimerFunction from "../components/ViewMeeting/CircularTimer/CircularTimerFunction";
import ContentContainer from "../components/ViewMeeting/Containers/ContentContainer";

const ViewMeeting = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <CircularTimerFunction time={5}/>
      </ContentContainer>
      <Calendar/>
    </BackgroundContainer>
  );
};

export default ViewMeeting;
