import {IEvent} from "../interfaces/Event";
import dayjs from "dayjs";

export const FindUpcomingEvents = (events: Array<IEvent>) => {
  let currentDay = dayjs();
  let upcomingEvents = events.filter(event =>
    dayjs(event.start).isAfter(currentDay) || dayjs(event.end).isAfter(currentDay));
  let selectedEvent = upcomingEvents[0];

  for (let data of upcomingEvents) {
    if (currentDay.isBetween(dayjs(data.start), dayjs(data.end))) {
      return data;
    }
    if (dayjs(selectedEvent.start).isAfter(dayjs(data.start))) {
      selectedEvent = data;
    }
  }
  return selectedEvent;
}
