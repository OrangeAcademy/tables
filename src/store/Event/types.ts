import {Event} from "models/Event";

export interface EventState {
    events: Event[];
    isLoading: boolean;
    error: string;
}