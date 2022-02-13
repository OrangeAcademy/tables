// Local imports
import { useRef } from 'react';
import BookMeetingBtn from './Button';
import StyledBox from './Containers/Box';

// This array defines the time duration of a meeting user wants to book
const MEETING_DURATION = [15, 30, 45, 60];

// Based on Meeting Duration -> Returns MEETING_DURATION.length number of buttons for booking a meeting
const MeetingDurationButtons = () => {
  const selectedDuration = useRef(MEETING_DURATION[0]);
  const setDuration = (index) =>
    (selectedDuration.current = MEETING_DURATION[index]);

  return (
    <StyledBox>
      {MEETING_DURATION.map((duration, index) => (
        <BookMeetingBtn
          setDuration={setDuration}
          index={index}
          duration={duration}
          key={index}
        />
      ))}
    </StyledBox>
  );
};

export default MeetingDurationButtons;
