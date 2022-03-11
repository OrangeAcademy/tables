/*
  Creates the [15 min, 30 min, 45 min, 60 min, ETC...] button(s). 
  Used on the Book Meeting page (route-path: "/").
*/

// React imports
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { addPreferredLen } from "../../../redux/slices/createReservationSlice";
import { store } from "../../../redux/store/store";

// Local imports
import BookMeetingBtn from './Button';
import StyledBox from './Containers/Box';


// This array defines the duration of a meeting user wants to book
const MEETING_DURATIONS: number[] = [15, 30, 45, 60];

/* --------------------------  Component ----------------------------   */
/* 

  Returns MEETING_DURATIONS.length number of buttons for booking a meeting

*/

const MeetingDurationButtons = () => {
  const nextMeetingStart = useAppSelector(state => state.upcomingEvent.start);
  const [ timeToNextMeeting, setTimeToNextMeeting ] = useState(0);

  useEffect(() => {
    setTimeToNextMeeting(dayjs().diff(nextMeetingStart, "minutes"));

  }, [nextMeetingStart]);

  useEffect(() => {
    const timeTillNextMeeting = setInterval(() => {
      if(timeToNextMeeting > 0) setTimeToNextMeeting(+timeToNextMeeting - 1);
    }, 1000)

    return () => clearInterval(timeTillNextMeeting);
  }, [nextMeetingStart, timeToNextMeeting])


  // Storing the user-selected meeting duration
  const selectedDuration = useRef(MEETING_DURATIONS[0]);

  // Sets the meeting duration to the value of the user-clicked button
  const setDuration = (index: number):number =>
    (selectedDuration.current = MEETING_DURATIONS[index]);

  useEffect(() => {
    selectedDuration.current = MEETING_DURATIONS[0]
    store.dispatch(addPreferredLen({duration: MEETING_DURATIONS[0]}));
  }, [])
   

  return (
    <StyledBox>
      {MEETING_DURATIONS.map((meetingDuration, index) => (
        
        <BookMeetingBtn index={index} key={index} duration={meetingDuration} setDuration={setDuration} />

      ))}
    </StyledBox>
  );
};

export default MeetingDurationButtons;
