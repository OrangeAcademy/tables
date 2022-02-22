import React, {useState, useEffect} from 'react';
import CircularTimer from './CircularTimer';

function CircularTimerFunction({time}) {

  const [progress, setProgress] = useState(time * 60);
  let timeForProgressBar = time * 60;

  useEffect(() => {
    if (!progress) return;

    const timer = setInterval(() => {
      setProgress(progress - 1)
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return <CircularTimer seconds={progress} timeForProgressBar={timeForProgressBar}/>;
};

export default CircularTimerFunction;