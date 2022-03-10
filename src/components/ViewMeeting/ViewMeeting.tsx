import React from "react";
import Calendar from "./Calendar/Calendar";
import BackgroundContainer from "./Containers/BackgroundContainer";
import CircularTimerFunction from "./CircularTimer/CircularTimerFunction";
import ContentContainer from "./Containers/ContentContainer";
import StateInfo from "./StateInfo/StateInfo";
import Details from "./Details/Details";
import EndButton from "./EndButton/EndButton";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme/Theme"

import {MeetingDetails} from "../../interfaces/MeetingDetails"

const ViewMeeting = ({isBusy, upcomingEvent, seconds}: MeetingDetails) => {

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <ContentContainer>
          <StateInfo isBusy={isBusy}/>
          <CircularTimerFunction time={seconds}/>
          <Details isBusy={isBusy} upcomingEvent={upcomingEvent}/>
          <EndButton isBusy={isBusy} upcomingEvent={upcomingEvent} />
        </ContentContainer>
        <Calendar/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};
export default ViewMeeting;
