import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMeetingDuration } from "store/NewMeeting/newMeeting";

// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';


import {useSelector} from "react-redux";
import { meetingsDurationSelector } from "store/NewMeeting/selectors";
import { nextEventStartSelector } from "store/StateRoom/selectors";
import dayjs from "dayjs";
// import { useNavigate } from "react-router-dom";
import { setIsLessThan15Mins } from "store/StateRoom/stateRoomSlice";

// Props validation
interface props { 
  duration: number,
  setDuration: Function,
  index: number,

}


/* ------------------ Component -------------- */
/*
  Building block for creating the 'XYZ min' meeting duration button(s)
*/



const BookMeetingBtn = ({ duration, setDuration, index }: props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const durationRedux = useSelector(meetingsDurationSelector);
  const eventStartTime = useSelector(nextEventStartSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    setDuration(index);
    setIsSelected(!isSelected);
  }

  const styles = isSelected && ({
    backgroundColor: '#fef9e5',
    borderColor: "gray",
    boxShadow: '5px 11px 50px -8px rgba(0,0,0,0.95)',
    color: '#75726c',
    "&:hover": {
      backgroundColor: '#fef9e5',
    }
  });
  // const navigate = useNavigate();
  const checkIfBusy = useCallback(() => {
    if(!eventStartTime) return ;

    const tillEventStart = dayjs(eventStartTime).diff(dayjs(), "minutes");

    if(duration > tillEventStart){ 
      setIsDisabled(true)
    } else {
      setIsDisabled(false);
    }

    if(tillEventStart < 15) {
      dispatch(setIsLessThan15Mins(true));
    }


     
  }, [dispatch, duration, eventStartTime])

  useEffect(() => {
    checkIfBusy();
  }, [checkIfBusy])

  return (
    <StyledButton sx={{...styles}} disabled={isDisabled} onClick={handleClick}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
