import {IEvent, IPresenters} from "../models/Event";
import dayjs from "dayjs";


const initialState = {
  elementId: 0,
  end: "",
  occurrencesEnd: "",
  start: "",
  subject: "",
  agenda: [],
  presenters: Array<IPresenters>({
    presenter: "",
    topic: ""
  }),
  attendees: Array<string>("")
};

interface IGetClosestEvent {
  events?: IEvent[]
}



export const getClosestEvent = async ({ events } : IGetClosestEvent) => {
  const timeNow = dayjs();

  if(!events) return initialState;
  // Sort event date and time [ FROM closest to present date and time TO furthest from now ] 
  const upcomingEvents = events.filter(event => dayjs(event.start).isAfter(timeNow) || dayjs(event.end).isAfter(timeNow));

  const [upcomingEvent] = upcomingEvents.sort((a,b) => {
      const differenceA: number  = Math.abs(+timeNow - +dayjs(a.start));
      const differenceB: number = Math.abs(+timeNow - +(dayjs(b.start)));
      return differenceA - differenceB; // sort a before b when the distance is smaller
  });

  return upcomingEvent;
  
}


