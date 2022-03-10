import dayjs from "dayjs";
import {  useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";

// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';

// Props validation
interface IBookMeetingBtnProps { 
  duration: number,
  setDuration: (index: number) => void,
  index: number
}


/* ------------------ Component -------------- */
/*
  Building block for creating the 'XYZ min' meeting duration button(s)
*/

const BookMeetingBtn = ({ duration, setDuration, index }: IBookMeetingBtnProps) => {
    // Get time till next meeting
    const nextMeetingStart = useAppSelector(state => state.upcomingEvent.start);
    const minutesTillNextMeeting = dayjs(nextMeetingStart).diff(dayjs(), 'minutes');

    // If current duration is less than time till next meeting -> set button as disabled
    const isDisabled = nextMeetingStart ?  duration > minutesTillNextMeeting : false; 

    useEffect(() => {}, [minutesTillNextMeeting])

  return (
    <StyledButton disabled={isDisabled} onClick={() => setDuration(index)}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
