/*
  Creates the [15 min, 30 min, 45 min, 60 min, ETC...] button(s). 
  Used on the Book Meeting page (route-path: "/").
*/

// React imports
import { useCallback, useEffect } from "react";

// Local imports
import BookMeetingBtn from './Button';
import StyledBox from './Containers/Box';
import {useDispatch, useSelector} from "react-redux";
import {setMeetingDuration} from "../../../store/NewMeeting/newMeeting";
import { nextEventStartSelector } from "store/StateRoom/selectors";
import dayjs from "dayjs";
import { setIsLessThan15Mins } from "store/StateRoom/stateRoomSlice";


// This array defines the duration of a meeting user wants to book
const MEETING_DURATIONS: number[] = [15, 30, 45, 60];

/* --------------------------  Component ----------------------------   */
/* 

  Returns MEETING_DURATIONS.length number of buttons for booking a meeting

*/


const MeetingDurationButtons = () => {

  // Storing the user-selected meeting duration
  // const selectedDuration = useRef(MEETING_DURATIONS[0]);
  const dispatch = useDispatch()
  // Sets the meeting duration to the value of the user-clicked button
  const setDuration = (index: number) => dispatch(setMeetingDuration(MEETING_DURATIONS[index]));
  const eventStartTime = useSelector(nextEventStartSelector);

  const checkIfBusy = useCallback(() => {
    if(!eventStartTime) return ;

    const tillEventStart = dayjs(eventStartTime).diff(dayjs(), "seconds");

    if(tillEventStart <= 15 * 60) {
      dispatch(setIsLessThan15Mins(true));
    }

  
    
     
  }, [dispatch, eventStartTime])

  useEffect(() => {
    checkIfBusy();
  }, [checkIfBusy])

  return (
    <StyledBox>
      {MEETING_DURATIONS.map((meetingDuration, index) => (
        
        <BookMeetingBtn index={index}  key={index} duration={meetingDuration} setDuration={setDuration} />

      ))}
    </StyledBox>
  );
};

export default MeetingDurationButtons;
