import { useEffect } from "react";
import Calendar from "../components/ViewMeeting/Calendar/Calendar";
import BackgroundContainer from "../components/ViewMeeting/Containers/BackgroundContainer";
import ContentContainer from "../components/ViewMeeting/Containers/ContentContainer";
import StateInfo from "../components/ViewMeeting/StateInfo/StateInfo";
import Details from "../components/ViewMeeting/Details/Details";
import EndButton from "../components/ViewMeeting/EndButton/EndButton";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../components/ViewMeeting/theme/Theme"
import {MeetingDetails} from "../interfaces/MeetingDetails"
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "store/Event/actionCreators";
import { nextEventSelector, nextEventStartSelector } from "store/StateRoom/selectors";
import dayjs from "dayjs";

import { setRoomStatus } from "store/StateRoom/stateRoomSlice";
// import CircularTimerFunction from "components/ViewMeeting/CircularTimer/CircularTimerFunction";
import CircularTimer from "components/ViewMeeting/CircularTimer/Timer";

const ViewMeeting = ({isBusy, upcomingEvent, seconds, getNextEventFunction}: MeetingDetails) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextEvent = useSelector(nextEventSelector);
  const nextEventStart = useSelector(nextEventStartSelector);

  const secondsToEvent = dayjs(nextEventStart).diff(dayjs(), 'seconds');
 useEffect(() => {
  if (!upcomingEvent || (!isBusy && seconds >= 15 * 60)) {
    dispatch(getEvents());
    // navigate('/');
    return;
  }

  if(secondsToEvent <= 15 * 60) {
    dispatch(getEvents());
    dispatch(setRoomStatus(true))
    // navigate('/');
    return;
  }

  if(nextEvent && dayjs() >= dayjs(nextEvent.end)) {
    dispatch(getEvents());
    // navigate('/');
    return;
  }
 }, [dispatch, isBusy, nextEvent, seconds, secondsToEvent, upcomingEvent])


  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <ContentContainer>
          <StateInfo isBusy={isBusy}/>
          {/* <CircularTimerFunction time={seconds}  /> */}
          <CircularTimer />
          <Details isBusy={isBusy} upcomingEvent={upcomingEvent}/>
          <EndButton isBusy={isBusy} upcomingEvent={upcomingEvent} getNextEventFunction={getNextEventFunction}/>
        </ContentContainer>
        <Calendar getNextEventFunction={getNextEventFunction}/>
      </BackgroundContainer>
    </ThemeProvider>
  );
};
export default ViewMeeting;
