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
import { setShouldAutoBook, setAutoBookDuration, setIsLessThan15Mins } from "store/StateRoom/stateRoomSlice";
import { focusedStyled, unFocusedStyle } from "./Button";

// This array defines the duration of a meeting user wants to book
const MEETING_DURATIONS: number[] = [15, 30, 45, 60];

/* --------------------------  Component ----------------------------   */
/* 

  Returns MEETING_DURATIONS.length number of buttons for booking a meeting

*/

const MeetingDurationButtons = () => {
  const dispatch = useDispatch(); // Instantiating the Redux Store dispatch
  const eventStartTime = useSelector(nextEventStartSelector);  // Upcoming event start time
  const isSelected = useSelector(autoBookDurationSelector);   // Variable that holds the duration selected by user

  const [isDisabled, setIsDisabled] = useState<number[]>([]);   // Array that holds invalid durations
  
  // Dispatches for RESETTING the autobookConfig in Redux
  const resetAutobookConfig = useCallback(() => {
    dispatch(setAutoBookDuration(null))
    dispatch(setShouldAutoBook(false));
  }, [dispatch])

  // Dispatches for SETTING UP the autobookConfig in Redux
  const setAutoBookConfig = useCallback((meetingDuration: number) => {
    dispatch(setAutoBookDuration(meetingDuration))
    dispatch(setShouldAutoBook(true));
  }, [dispatch])

  // Handles | Toggles autoBookConfig
  const handleClick = (meetingDuration: number) => {
    if( meetingDuration === isSelected) return resetAutobookConfig();
    
    setAutoBookConfig(meetingDuration);
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

      if(isSelected && isDisabled.includes(isSelected)) return resetAutobookConfig();
      if(isDisabled.length === MEETING_DURATIONS.length) return dispatch(setIsLessThan15Mins(true));

    }, 1000);

    return () => clearInterval(checkForDisableInterval);
    
  }, [btnsToDisable, dispatch, eventStartTime, isDisabled, isSelected, resetAutobookConfig])

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

