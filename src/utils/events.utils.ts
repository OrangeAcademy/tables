import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from "dayjs/plugin/duration.js";


// Interfaces
import {IEvent} from "../interfaces/Event";

// Redux
import { getEvents } from "../redux/slices/eventSlice";
import { store } from "../redux/store/store";
import { storeUpcomingEvent } from "../redux/slices/upcomingEventSlice";
dayjs.extend(relativeTime);
dayjs.extend(duration);


export const FindUpcomingEvents = (events: Array<IEvent>):IEvent => {
  let currentDay = dayjs();
  let upcomingEvents = events.filter(event =>
    dayjs(event.start).isAfter(currentDay) || dayjs(event.end).isAfter(currentDay));
  let selectedEvent = upcomingEvents[0];



  for (let event of upcomingEvents) {
    if (currentDay.isBetween(dayjs(event.start), dayjs(event.end))) {
      return event;
    }
    if (dayjs(selectedEvent.start).isAfter(dayjs(event.start))) {
      selectedEvent = event;
    }
  }


  return selectedEvent;
}

// Gets the closest event to DATE.NOW() and stores the event in Redux Store
// useSelector(state => state.upcomingEvent)
export const getClosestEvent = async (): Promise<IEvent | undefined> => {
  try{
    const timeNow = dayjs();
    const events: IEvent[] = await store.dispatch(getEvents()).unwrap();
    const upcomingEvents = events.filter(event => dayjs(event.start).isAfter(timeNow) || dayjs(event.end).isAfter(timeNow));
  
    // Sort event date and time [ FROM closest to present date and time TO furthest from now ] 
    const upcomingEvent = upcomingEvents.sort((a,b) => {
      const differenceA: number  = Math.abs(+timeNow - +dayjs(a.start));
      const differenceB: number = Math.abs(+timeNow - +(dayjs(b.start)));
      return differenceA - differenceB; // sort a before b when the distance is smaller
    });
  
    store.dispatch(storeUpcomingEvent(upcomingEvent[0]))
  
    return upcomingEvent[0]
  } catch(e) {
    console.error('Encoutered problem with getClosestEvent: ', e);
    throw Error;
  }
}

export const isEventRunningNow = async (): Promise<boolean | undefined> => {
  try{
    const events: IEvent[] = await store.dispatch(getEvents()).unwrap();
  const isEventRunning = events.some(event => dayjs() > dayjs(event.start) && dayjs() < dayjs(event.end));

  return isEventRunning;
  } catch(e) {
    console.error('ENCOUNTERED ERROR AT isEventRunningNow: ', isEventRunningNow);
    throw Error;
  }
}

export const getRunningEvent = async (): Promise<IEvent | undefined> => {
  try{
    const events: IEvent[] = await store.dispatch(getEvents()).unwrap();
    const eventsToday: IEvent[] = events.filter(event => dayjs(event.start).isSame(dayjs(), "date"))
 
    const runningEvent = eventsToday.find(event => dayjs() > dayjs(event.start) && dayjs() < dayjs(event.end))


    return runningEvent;
  } catch(e) {
    console.error('ENCOUNTERED ERROR AT getRunningEvent: ', e)
    throw Error;
  }
}