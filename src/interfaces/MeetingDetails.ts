import {IEvent} from "./Event";

export interface MeetingDetails {
  isBusy: boolean,
  upcomingEvent: IEvent,
  seconds: number,
  timeFunction(arg: boolean): void
}
