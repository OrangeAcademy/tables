import {createSelector, Selector} from "reselect";
import {RootState} from "../types";

export const roomStateSelector: Selector<RootState, RootState['roomState']> = (state) => state.roomState;
export const nextEventSelector = createSelector(roomStateSelector, state => state.upcomingEvent);
export const nextEventNameSelector = createSelector(roomStateSelector, state => state.upcomingEvent?.subject);
export const nextEventStartSelector = createSelector(roomStateSelector, state => state.nextEventStart);
export const nextEventEndSelector = createSelector(roomStateSelector, state => state.upcomingEvent?.end);
export const roomStatusSelector = createSelector(roomStateSelector, state => state.isBusy);
export const roomNameSelector = createSelector(roomStateSelector, state => state.roomName);
export const roomLocationSelector = createSelector(roomStateSelector, state => state.roomLocation);
export const IsLessThan15MinsSelector = createSelector(roomStateSelector, state => state.isLessThan15Mins);
export const autoBookConfigSelector = createSelector(roomStateSelector, state => state.autoBookConfig);
export const shouldAutoBookSelector = createSelector(roomStateSelector, state => state.autoBookConfig.isAutoBookable);
export const autoBookDurationSelector = createSelector(roomStateSelector, state => state.autoBookConfig.duration);
export const snackbarVisibilitySelector = createSelector(roomStateSelector, state => state.snackbarVisibility);
export const snackbarMessageSelector = createSelector(roomStateSelector, state => state.snackbarMessage);
export const snackbarSeveritySelector = createSelector(roomStateSelector, state => state.snackbarSeverity);
