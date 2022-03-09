import { configureStore } from "@reduxjs/toolkit";
// Reducers
import eventReducer from "../slices/eventSlice";
import userReducer from "../slices/userSlice";
import reportIssueReducer from "../slices/reportIssueSlice";
import stateRoomReducer from "../slices/stateRoomSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
    users: userReducer,
    reports: reportIssueReducer,
    stateRoom: stateRoomReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
