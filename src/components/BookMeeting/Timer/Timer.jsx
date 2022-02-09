import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Wrapper from '../Wrapper/Wrapper';

import './Timer.css';

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
    <Wrapper>
      <h3 className="timer">{currentTime}</h3>
    </Wrapper>
  );
};

export default Timer;
