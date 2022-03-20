/*
  Creates the [15 min, 30 min, 45 min, 60 min, ETC...] button(s). 
  Used on the Book Meeting page (route-path: "/").
*/

// React imports
import { useCallback, useEffect, useState } from "react";



// Local imports
import BookMeetingBtn from './Button';
import StyledBox from './Containers/Box';
import {useDispatch, useSelector} from "react-redux";
import { autoBookDurationSelector, nextEventStartSelector } from "store/StateRoom/selectors";
import dayjs from "dayjs";
import { setIsLessThan15Mins } from "store/StateRoom/stateRoomSlice";
import { focusedStyled, unFocusedStyle } from "./Button";
import useAutobook from "hooks/useAutoBook";

// This array defines the duration of a meeting user wants to book
const MEETING_DURATIONS: number[] = [15, 30, 45, 60];

/* --------------------------  Component ----------------------------   */
/* 

  Returns MEETING_DURATIONS.length number of buttons for booking a meeting

*/

const MeetingDurationButtons = () => {
  const dispatch = useDispatch(); // Instantiating the Redux Store dispatch
  const {resetConfig, setConfig } = useAutobook(); // Custom Hook for managing autoBookConfig in Redux store 
  const eventStartTime = useSelector(nextEventStartSelector);  // Upcoming event start time
  const isSelected = useSelector(autoBookDurationSelector);   // Variable that holds the duration selected by user

  const [isDisabled, setIsDisabled] = useState<number[]>([]);   // Array that holds invalid durations
  
  // Handles | Toggles autoBookConfig
  const handleClick = (meetingDuration: number) => {
    if( meetingDuration === isSelected) return resetConfig();
    
    setConfig(meetingDuration);
  } 

  // Checks how much time is left till the next event start and stores invalid durations if any
  const btnsToDisable = useCallback(() => {
    const tillEventStart = dayjs(eventStartTime).diff(dayjs(), "seconds");

    return MEETING_DURATIONS.filter(dur => dur > tillEventStart / 60);
  }, [eventStartTime])


  // Interval that handles the disabled state of buttons
  useEffect(() => {
    const checkForDisableInterval = setInterval(() => {
      setIsDisabled(btnsToDisable());

      if(isSelected && isDisabled.includes(isSelected)) return resetConfig();
      if(isDisabled.length === MEETING_DURATIONS.length) return dispatch(setIsLessThan15Mins(true));

    }, 1000);

    return () => clearInterval(checkForDisableInterval);
    
  }, [btnsToDisable, dispatch, eventStartTime, isDisabled, isSelected, resetConfig])

  return (
    <StyledBox>
      {MEETING_DURATIONS.map((meetingDuration, index) => (
        
        <BookMeetingBtn key={index} sx={isSelected === meetingDuration ? focusedStyled : unFocusedStyle} onClick={() => handleClick(meetingDuration)} disabled={btnsToDisable().includes(meetingDuration)}>
          {meetingDuration} min
        </BookMeetingBtn>

      ))}
     
    </StyledBox>
  );
};

export default MeetingDurationButtons;

