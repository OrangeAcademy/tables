import dayjs from "dayjs";
import {  useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { addPreferredLen } from "../../../redux/slices/createReservationSlice";
import { store } from "../../../redux/store/store";

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

const styleBtnFocus = {backgroundColor: '#fef9e5',  color: '#75726c', borderColor: "gray",boxShadow: '5px 11px 50px -8px rgba(0,0,0,0.95)'}

const BookMeetingBtn = ({ duration, setDuration, index }: IBookMeetingBtnProps) => {
    // Get time till next meeting
    const nextMeetingStart = useAppSelector(state => state.upcomingEvent.start);
    const minutesTillNextMeeting = dayjs(nextMeetingStart).diff(dayjs(), 'minutes');

    // If current duration is less than time till next meeting -> set button as disabled
    const isDisabled = nextMeetingStart ?  duration > minutesTillNextMeeting : false; 

    const preferredLen = useAppSelector(state => state.createReservation.preferences.preferredMeetLengthMins);
    const shouldFocus = preferredLen === duration ? true : false;

    useEffect(() => {}, [minutesTillNextMeeting])

    const handleDuration = () => {
      setDuration(index);

      store.dispatch(addPreferredLen({duration}));
    }

  return (
    <StyledButton sx={shouldFocus ? styleBtnFocus : null} 
    disabled={isDisabled} onClick={handleDuration}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
