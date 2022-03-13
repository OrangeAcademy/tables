import {createSelector, Selector} from "reselect";
import {RootState} from "../types";

export const userSelector: Selector<RootState, RootState['user']> = (state) => state.user;
export const usersSelector = createSelector(userSelector, (event) => event.users);
