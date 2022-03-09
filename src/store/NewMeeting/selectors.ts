import {createSelector, Selector} from "reselect";
import {RootState} from "../types";

export const meetingSelector: Selector<RootState, RootState['newMeeting']> = (state) => state.newMeeting;
export const meetingsDurationSelector = createSelector(meetingSelector, (newMeetings) => newMeetings.duration);
// export const meetingsSubjectSelector = createSelector(meetingSelector, (newMeetings) => newMeetings.subject);