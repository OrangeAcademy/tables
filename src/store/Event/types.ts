import {IEvent} from "models/Event";

export interface EventState {
    events: IEvent[];
    isLoading: boolean;
    error: string;
}
