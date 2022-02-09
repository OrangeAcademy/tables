import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Typography, Container } from '@mui/material';

const currentTimeFormatted = () => dayjs().format('HH:mm:ss');

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(currentTimeFormatted);

  useEffect(() => {
    const updateTime = setInterval(
      () => setCurrentTime(currentTimeFormatted),
      1000
    );

    return () => clearInterval(updateTime);
  });

  return (
    <Container
      sx={{ display: 'grid', margin: 0, padding: 0, minWidth: '100%' }}
    >
      <Typography variant="h3" color="#fef9e7" sx={{ justifySelf: 'right' }}>
        {currentTime}
      </Typography>
    </Container>
  );
};

export default Timer;
