import {createSelector, Selector} from "reselect";
import {RootState} from "../types";

export const roomStateSelector: Selector<RootState, RootState['roomState']> = (state) => state.roomState;
export const nextEventStartSelector = createSelector(roomStateSelector, state => state.nextEventStart);
export const roomStatusSelector = createSelector(roomStateSelector, state => state.isBusy);
export const roomNameSelector = createSelector(roomStateSelector, state => state.roomName);
export const roomLocationSelector = createSelector(roomStateSelector, state => state.roomLocation);
export const IsLessThan15MinsSelector = createSelector(roomStateSelector, state => state.isLessThan15Mins);