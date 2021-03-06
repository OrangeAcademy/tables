import React, {useState, useEffect} from 'react';
import CircularTimer from './CircularTimer';
import {ITime} from "../../../interfaces/Time";

function CircularTimerFunction({time}: ITime) {
  const [progress, setProgress] = useState(time);
  let timeForProgressBar = time;

  useEffect(() => {
    setProgress(time)
  }, [time])

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
