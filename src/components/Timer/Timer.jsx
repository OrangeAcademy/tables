import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

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

  return <h3>{currentTime}</h3>;
};

export default Timer;
