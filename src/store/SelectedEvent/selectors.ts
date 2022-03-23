import { createSelector, Selector } from "reselect";
import {RootState} from "../types";

const useSelectedEvent: Selector<RootState, RootState['selectedEvent']> = (state) => state.selectedEvent;
export const selectedEventSelector = createSelector(useSelectedEvent, state => state.event);