import {createSelector, Selector} from "reselect";
import {RootState} from "../types";

export const eventSelector: Selector<RootState, RootState['event']> = (state) => state.event;
export const eventsSelector = createSelector(eventSelector, (event) => event.events);
