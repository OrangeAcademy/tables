import React from "react";
import Calendar from "../components/ViewMeeting/Calendar/Calendar";
import BackgroundContainer from "../components/ViewMeeting/Containers/BackgroundContainer";
import CircularTimerFunction from "../components/ViewMeeting/CircularTimer/CircularTimerFunction";
import ContentContainer from "../components/ViewMeeting/Containers/ContentContainer";
import StateInfo from "../components/ViewMeeting/StateInfo/StateInfo";
import Details from "../components/ViewMeeting/Details/Details";

const ViewMeeting = () => {

  return (
    <BackgroundContainer>
      <ContentContainer>
        <StateInfo isBusy={false}/>
        <CircularTimerFunction time={5}/>
        <Details isBusy={false}/>
      </ContentContainer>
      <Calendar/>
    </BackgroundContainer>
  );
};

export default ViewMeeting;
