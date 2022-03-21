import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

// MUI Imports
import { Typography, Container } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { nextEventStartSelector } from "store/StateRoom/selectors";
import { setIsLessThan15Mins } from "store/StateRoom/stateRoomSlice";

// Styles
const containerStyles = { display: 'grid', minWidth: '100%' };
const textStyles = { justifySelf: 'right', fontSize: "clamp(16px, 4vw, 40px)" };

//Initiating the variable that holds the current local time
const currentTimeFormatted = () => dayjs().format('HH:mm:ss');


/* -------------------  Component  ---------------- */
/*
  Component that show the current local time
  Time is updated each and every second
*/

const Timer = () => {
  // Stores current time in format (HH:mm:ss) // 23:59:59
  const [currentTime, setCurrentTime] = useState(currentTimeFormatted);
  const nextEventStart = useSelector(nextEventStartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // Updates time every second
    const updateTime = setInterval(
      () => {
        setCurrentTime(currentTimeFormatted);
        
      },
      1000
    );

    // Cleanup for setInterval
    return () => clearInterval(updateTime);
  }, [dispatch, nextEventStart]);

  return (
    <Container disableGutters={true} sx={{ ...containerStyles }}>
      <Typography variant="h3" color="#fef9e7" sx={{ ...textStyles }}>
        {currentTime}
      </Typography>
    </Container>
  );
};

export default Timer;
