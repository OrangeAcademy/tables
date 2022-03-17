import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppDispatch } from "hooks/redux";
import { useSelector } from "react-redux";
import {setRoomStatus, storeUpcomingEvent, setNextEventStart, setIsLessThan15Mins} from "store/StateRoom/stateRoomSlice";
import { nextEventEndSelector, nextEventStartSelector } from "store/StateRoom/selectors";
import { SERVER_EVENTS_ROUTE } from "constants/paths";
import { getClosestEvent } from "utils/events.utils";
import { getEvents } from "store/Event/actionCreators";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);



function CircularTimer() {
  const largeScreen = useMediaQuery((theme:any) => theme.breakpoints.down('tablet'));
  const dispatch = useAppDispatch();
  const nextEventStart = useSelector(nextEventStartSelector);
  const nextEventEnd = useSelector(nextEventEndSelector);

  const [ttlSec, setTtlSec] = useState<number | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [relativeTime, setRelativeTime] =  useState<string | null>(null);


  const normalise = () => (progress&&ttlSec) ? progress * 100 / ttlSec : 100;

  const GetUpcomingEvent = useCallback(async () => {
    await dispatch(getEvents());
    const events = await (await fetch(SERVER_EVENTS_ROUTE)).json();
    const nextMeeting = await getClosestEvent({ events });

    
    if(nextMeeting) {
      dispatch(storeUpcomingEvent(nextMeeting));
      dispatch(setNextEventStart(nextMeeting.start));
      dispatch(setRoomStatus(dayjs(nextMeeting.end) <= dayjs()));
      dispatch(setIsLessThan15Mins(dayjs(nextMeeting.end).diff(dayjs(), "seconds") <= 15 * 60));
    } else {
      window.location.reload();
      // dispatch(setNextEventStart(""));
      // dispatch(setRoomStatus(false));
      // dispatch(setIsLessThan15Mins(false));
    }

    return nextMeeting; 
}, [dispatch])

  const totalSecToEvent = useCallback(() => {
    const now = dayjs();
    const timeToNextEventStart = dayjs(nextEventStart).diff(now, "seconds") ;
    const timeToNextEventEnd = dayjs(nextEventEnd).diff(now, "seconds");

    if(nextEventStart && timeToNextEventStart >= 2) {
      setTtlSec(timeToNextEventStart);
      setRelativeTime(nextEventStart);
      setProgress((ttlSec));
      dispatch(setRoomStatus(false));
    }

    if(nextEventStart && timeToNextEventStart < 2) {
      setTtlSec(timeToNextEventEnd);
      nextEventEnd && setRelativeTime(nextEventEnd?.toString());
      dispatch(setRoomStatus(true));
      setProgress((ttlSec));
    }

    if(timeToNextEventEnd <= 1) {
      GetUpcomingEvent();
    }


  }, [GetUpcomingEvent, dispatch, nextEventEnd, nextEventStart, ttlSec])



  useEffect(() => {
    totalSecToEvent();
  }, [totalSecToEvent, nextEventStart])

  useEffect(() => {
    const timer = setInterval(() => {

      if(!Number.isInteger(ttlSec)) {
        totalSecToEvent()
        return;
      }


      if(Number.isInteger(progress) && progress! <= 1) {
        totalSecToEvent();
        return;
      }

      if(Number.isInteger(progress)) {
        setProgress(dayjs(relativeTime).diff(dayjs(), "seconds"));
        return;
      }
    }, 1000)

    return () => clearInterval(timer);
  }, [progress, relativeTime, totalSecToEvent, ttlSec])

  return (
   <>
    {progress && ttlSec 
      ?  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex'
        }}
      >
        <CircularProgress
          variant="determinate"
          value={normalise()}
          size={largeScreen ? '200px' : '250px'}
          thickness={2}
          style={{
            zIndex: '50',
            color: 'white'
          }}
        />
        <CircularProgress
          variant="determinate"
          value={100}
          size={largeScreen ? '200px' : '250px'}
          thickness={2}
          style={{
            position: 'absolute',
            color: 'white',
            opacity: '0.3'
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            style={{fontSize: '30px', color: 'white', fontWeight: 'bold'}}
          >
            {progress >= 0 ? dayjs.duration(progress, "seconds").format('mm:ss') : "00:00"}
          </Typography>
        </Box>
      </Box>
    </div>

    : null
      
    }
   </>
  );
}

export default CircularTimer;

