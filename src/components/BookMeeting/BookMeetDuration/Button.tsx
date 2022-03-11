import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMeetingDuration } from "store/NewMeeting/newMeeting";

// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';


import {useSelector} from "react-redux";
import { meetingsDurationSelector } from "store/NewMeeting/selectors";

// Props validation
interface props { 
  duration: number,
  setDuration: Function,
  index: number,
  localSeconds: number
}


/* ------------------ Component -------------- */
/*
  Building block for creating the 'XYZ min' meeting duration button(s)
*/



const BookMeetingBtn = ({ localSeconds, duration, setDuration, index }: props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const durationRedux = useSelector(meetingsDurationSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    setDuration(index);
    dispatch(setMeetingDuration(duration));
  }

  const styles = durationRedux === duration ? ({
    backgroundColor: '#fef9e5',
    borderColor: "gray",
    boxShadow: '5px 11px 50px -8px rgba(0,0,0,0.95)',
    color: '#75726c',
  }) : null;

  useEffect(() => {
    if((localSeconds / 60) > duration) {
     return setIsDisabled(false)
    } else {
      return setIsDisabled(true);
    }
  }, [localSeconds, isDisabled, duration])

  return (
    <StyledButton sx={{...styles}} disabled={isDisabled} onClick={handleClick}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
