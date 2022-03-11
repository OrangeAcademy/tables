import { configureStore } from "@reduxjs/toolkit";
// Reducers
import eventReducer from "../slices/eventSlice";
import userReducer from "../slices/userSlice";
import reportIssueReducer from "../slices/reportIssueSlice";
// import stateRoomReducer from "../slices/stateRoomSlice";
import upcomingEventReducer from "../slices/upcomingEventSlice";
import meetingAttendeesReducer from "../slices/meetingAttendeesSlice";
import meetingTopicsReducer from "../slices/meetingTopicsSlice";
import roomStateReducer from "../slices/roomStateSlice";
import createReservationReducer from "../slices/createReservationSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
    upcomingEvent: upcomingEventReducer,
    users: userReducer,
    reports: reportIssueReducer,
    // stateRoom: stateRoomReducer,
    meetingTopics: meetingTopicsReducer,
    meetingAttendees: meetingAttendeesReducer,
    roomState: roomStateReducer,
    createReservation: createReservationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
 