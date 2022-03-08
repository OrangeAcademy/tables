import dayjs from "dayjs";
import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";

// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';

// Props validation
interface props { 
  duration: number,
  setDuration: Function,
  index: number
}


/* ------------------ Component -------------- */
/*
  Building block for creating the 'XYZ min' meeting duration button(s)
*/

const BookMeetingBtn = ({ duration, setDuration, index }: props) => {
    // Get time till next meeting
    const nextMeetingStart = dayjs(useAppSelector(state => state.upcomingEvent.start));
    const minutesTillNextMeeting = useCallback(() => nextMeetingStart.diff(dayjs(), 'minutes'), []);
    
    // If current duration is less than time till next meeting -> set button as disabled
    const isDisabled = +duration > +minutesTillNextMeeting;
  
    useEffect(() => {}, [minutesTillNextMeeting])
  return (
    <StyledButton disabled={isDisabled} onClick={() => setDuration(index)}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
