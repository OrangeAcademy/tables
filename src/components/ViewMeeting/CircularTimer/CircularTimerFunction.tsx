import {useState, useEffect, useCallback} from 'react';
// import CircularTimer from './CircularTimer';
import dayjs from "dayjs";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { Box, CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { store } from "../../../redux/store/store";
import { setAvailable, setBusy, toggleState } from "../../../redux/slices/roomStateSlice";
import { getClosestEvent } from "../../../utils/events.utils";


function CircularTimerFunction() {
  // Redux
  const { upcomingEvent: {start, end}, roomState: {isBusy} } = useAppSelector(state => state);
  const [ timeTillEvent, setTimeTillEvent] = useState(0);
  const [countToMeeting, setCountToMeeting] = useState(0);
  const getTime = useCallback(() => {
    const timeTillEventEnd = dayjs(end).diff(dayjs(), "seconds");
    const timeTillEventStart  = dayjs(start).diff(dayjs(), "seconds");


    if(timeTillEventStart > 0) {
      setTimeTillEvent(timeTillEventStart);
      setCountToMeeting(timeTillEventStart);
    }

    if(timeTillEventStart <= 0) {
        setTimeTillEvent(timeTillEventEnd) ;
        setCountToMeeting(timeTillEventEnd);
    };

  }, [end, start])

  const getUpcomingEvent = useCallback(async () => {
    try{
      //    Set the upcoming event to the one running now
     await getClosestEvent()
    
    //  .then(value => setRunningEvent(value))
    } catch(e) {
      console.error('ENCOUNTERED ERROR AT getUpcomingEvent: ', e)
      throw Error;
    }
}, [])

  useEffect(() => {
    const timer = setInterval( () => {
      if(countToMeeting < 0) return;

      if(countToMeeting === 1) {
        getTime();
        if(isBusy) {
          store.dispatch(setAvailable({}));
          getUpcomingEvent();
        } else {
          store.dispatch(setBusy({}));
        }
        return;
      }
      setCountToMeeting(countToMeeting - 1);
     
    }, 1000)
    return () => clearInterval(timer);
  }, [countToMeeting, getTime, isBusy])



  useEffect(() => {
    getTime();

  }, [start, end, timeTillEvent, getTime])

  const normalise = (value:any) => value * 100 / timeTillEvent;
  const largeScreen = useMediaQuery((theme:any) => theme.breakpoints.down('tablet'));
  return (
    <div
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
          value={normalise(countToMeeting)}
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
            {dayjs(countToMeeting * 1000).format('mm:ss')}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CircularTimerFunction;
