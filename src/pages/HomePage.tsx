// React imports
import React, { useState, useEffect, useCallback } from "react";

//Dayjs imports
import dayjs from "dayjs";

// Redux Imports
import {  connect } from "react-redux";
import { RootState, store } from "../redux/store/store";

//Interfaces
import { IEvent } from "../interfaces/Event";

// Components imports
import BookMeeting from "../components/BookMeeting/BookMeeting";
import ViewMeeting from "../components/ViewMeeting/ViewMeeting";
import { setAvailable, setBusy, toggleState } from "../redux/slices/roomStateSlice";
import { useAppDispatch } from "../redux/hooks/hooks";

interface IMapStateToProps {
  upcomingEvent: IEvent;
  roomState: {
    isBusy: boolean
  }
}

const mapStateToProps = (state: RootState): IMapStateToProps => ({ 
  upcomingEvent: state.upcomingEvent,
  roomState: state.roomState
  // any props you need else
});


const HomePage = ({upcomingEvent, roomState}: IMapStateToProps) => {
  // Redux
  const nextEventStartTime = dayjs(upcomingEvent.start);
  const nextEventEndTime = dayjs(upcomingEvent.end);

  // Component state
  const [timeTillEvent, setTimeTillEvent ] = useState(0);
  // const [isRoomBusy, setIsRoomBusy] = useState(false);
  const [isLessThan15Mins, setIsLessThan15Mins] = useState(false);


  const timeNow = dayjs();
  const checkRoomStatus = useCallback(() => { 
    const timeTillEventStart =  nextEventStartTime.diff(timeNow, "seconds");
    const timeTillEventStartsMins =  nextEventStartTime.diff(timeNow, "minutes");
    const timeTillEventEnd =  nextEventEndTime.diff(timeNow, "seconds");

    if(timeTillEventStartsMins - 1  > 15 ) {
        setIsLessThan15Mins(false);
    } 

    if(timeTillEventStartsMins - 1 <= 15){
        setIsLessThan15Mins(true);
    }
      
    if(timeTillEventStart >= 0 && roomState.isBusy) {
      setTimeTillEvent(timeTillEventStart);
      // store.dispatch(setAvailable({}))
    }


    if(timeTillEventStart < 0 && !roomState.isBusy) {
        setTimeTillEvent(timeTillEventEnd) ;
        // setIsRoomBusy(true);
        // store.dispatch(setBusy({}));

    };

}, [nextEventEndTime, nextEventStartTime, roomState.isBusy, timeNow])

  useEffect(() => checkRoomStatus());

  useEffect(() => {
    const interval = setInterval(() => checkRoomStatus(), 1000);

    return () => clearInterval(interval);
  }, [checkRoomStatus, upcomingEvent]);
  

  return (
    <>
    {
      upcomingEvent.start && (roomState.isBusy || isLessThan15Mins)
      ? <ViewMeeting isBusy={roomState.isBusy} upcomingEvent={upcomingEvent} seconds={timeTillEvent} />
      : <BookMeeting />
    }

    </>
  )
}

export const Home = connect(mapStateToProps)(HomePage);

// export default HomePage;