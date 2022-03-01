import { configureStore } from "@reduxjs/toolkit";

// Reducers
import reportIssueReducer from "./slices/reportIssueSlice";

export const store = configureStore({
  reducer: {
    reportIssueReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
