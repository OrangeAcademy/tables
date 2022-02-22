import React from "react";
import Calendar from "../components/ViewMeeting/Calendar/Calendar";
import BackgroundContainer from "../components/ViewMeeting/Containers/BackgroundContainer";
import CircularTimerFunction from "../components/ViewMeeting/CircularTimer/CircularTimerFunction";
import ContentContainer from "../components/ViewMeeting/Containers/ContentContainer";
import StateInfo from "../components/ViewMeeting/StateInfo/StateInfo";
import Details from "../components/ViewMeeting/Details/Details";
import EndButton from "../components/ViewMeeting/EndButton/EndButton";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const ViewMeeting = () => {
  let isBusy = false;

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <ContentContainer>
          <StateInfo isBusy={isBusy}/>
          <CircularTimerFunction time={5}/>
          <Details isBusy={isBusy}/>
          <EndButton isBusy={isBusy}/>
        </ContentContainer>
        <Calendar/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default ViewMeeting;
