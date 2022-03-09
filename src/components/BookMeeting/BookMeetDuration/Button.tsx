import React, { useEffect, useState } from "react";

// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';

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

  useEffect(() => {
    if((localSeconds / 60) > duration) {
     return setIsDisabled(false)
    } else {
      return setIsDisabled(true);
    }
  }, [localSeconds, isDisabled, duration])

  return (
    <StyledButton disabled={isDisabled} onClick={() => setDuration(index)}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
