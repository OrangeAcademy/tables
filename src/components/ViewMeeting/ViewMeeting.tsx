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

const ViewMeeting = ({isBusy}: MeetingDetails) => {

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <ContentContainer>
          <StateInfo isBusy={isBusy}/>
          <CircularTimerFunction />
          <Details />
          <EndButton />
        </ContentContainer>
        <Calendar/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};
export default ViewMeeting;
