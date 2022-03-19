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
import {setMeetingDuration} from "../../../store/NewMeeting/newMeeting";
import { nextEventStartSelector, shouldAutoBookSelector } from "store/StateRoom/selectors";
import dayjs from "dayjs";
import { setIsLessThan15Mins, setShouldAutoBook, setAutoBookDuration } from "store/StateRoom/stateRoomSlice";
import { grey } from "@mui/material/colors";


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

  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const eventStartTime = useSelector(nextEventStartSelector);


  const focusedStyled = ({  
    backgroundColor: '#fef9e5',
    opacity: [0.4, 0.4, 0.9],
    borderColor: grey[500],
    boxShadow: '5px 11px 50px -8px rgba(0,0,0,0.95)',
    color: '#75726c',
    "&:hover": {
      backgroundColor: "#fef9e5"
    }
  })

  const unFocusedStyle = ({
    "&:hover": {
      backgroundColor: "#a6dab3"
    }
  })

  const checkShouldDisable = (index: number) => {
    const tillEventStart = dayjs(eventStartTime).diff(dayjs(), "minutes");

    if(MEETING_DURATIONS[index] > tillEventStart) { 
      return setIsDisabled(true)
    } else {
      return setIsDisabled(false);
    }
  }

  const handleClick = (index: number) => {
    if(index === isSelected) {
      setIsSelected(null);
      dispatch(setShouldAutoBook(false));
      dispatch(setAutoBookDuration(null))
      return
    }
 
    setIsSelected(index);
    dispatch(setShouldAutoBook(true));
    dispatch(setAutoBookDuration(MEETING_DURATIONS[index]))
  } 

  return (
    <StyledBox>

    <BookMeetingBtn sx={isSelected === 0 ? focusedStyled : unFocusedStyle} onClick={() => handleClick(0)} disabled={isDisabled}>15 min</BookMeetingBtn>
    <BookMeetingBtn sx={isSelected === 1 ? focusedStyled : unFocusedStyle} onClick={() => handleClick(1)} disabled={isDisabled}>30 min</BookMeetingBtn>
    <BookMeetingBtn sx={isSelected === 2 ? focusedStyled : unFocusedStyle} onClick={() => handleClick(2)} disabled={isDisabled}>45 min</BookMeetingBtn>
    <BookMeetingBtn sx={isSelected === 3 ? focusedStyled : unFocusedStyle} onClick={() => handleClick(3)} disabled={isDisabled}>60 min</BookMeetingBtn>


      {/* {MEETING_DURATIONS.map((meetingDuration, index) => (
        
        <BookMeetingBtn key={index} onClick={() => {
          setIsSelected(!isSelected);

          isSelected ? setSelectedDuration(MEETING_DURATIONS[index]) : setSelectedDuration(null);

        }}>{meetingDuration} min</BookMeetingBtn>

      ))} */}
     
    </StyledBox>
  );
};

export default MeetingDurationButtons;

