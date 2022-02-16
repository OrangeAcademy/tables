import React from "react";

// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';

// Hard-typed props
interface props { 
  duration: number,
  setDuration: Function,
  index: number
}

const BookMeetingBtn = ({ duration, setDuration, index }: props) => {
  return (
    <StyledButton onClick={() => setDuration(index)}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
