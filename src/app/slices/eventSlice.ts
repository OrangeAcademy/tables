import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../interfaces/Event";
import { IEvents } from "../../interfaces/Events";

const initialState: IEvents = {
  events: []
}

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<IEvent>) => {
      const newEvent: IEvent = {
        id: Math.random(),
        bookTime: action.payload.bookTime,
        subject: action.payload.subject,
        start: action.payload.start,
        end: action.payload.end,
        userId: action.payload.userId,
      }
      state.events.push(newEvent);
    }
  }
})

export const { addEvent } = eventSlice.actions;
export default eventSlice.reducer
