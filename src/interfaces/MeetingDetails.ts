import {IEvent} from "./Event";

export interface MeetingDetails {
  isBusy: boolean,
  upcomingEvent: IEvent | undefined,
  seconds: number,
  timeFunction?: (arg: boolean) => void
}
