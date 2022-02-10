import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

// MUI Imports
import { Typography, Container } from '@mui/material';

//Initiating the variable that holds the current local time
const currentTimeFormatted = () => dayjs().format('HH:mm:ss');

// Component that show the current local time
// Time is updated each and every second
const Timer = () => {
  const [currentTime, setCurrentTime] = useState(currentTimeFormatted);

  useEffect(() => {
    // Updates time every second
    const updateTime = setInterval(
      () => setCurrentTime(currentTimeFormatted),
      1000
    );

    // Cleanup
    return () => clearInterval(updateTime);
  });

  return (
    <Container sx={{ display: 'grid', minWidth: '100%' }}>
      <Typography variant="h3" color="#fef9e7" sx={{ justifySelf: 'right' }}>
        {currentTime}
      </Typography>
    </Container>
  );
};

export default Timer;
