import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IEvent} from "../../interfaces/Event";
import {IEvents} from "../../interfaces/Events";

const initialState: IEvents = {
  events: []
}

export const getEvents = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    return await fetch('http://localhost:4000/api/events').then(
      (data) => data.json()
        .then((res) => res)
    )
  }
)

export const postEvents = createAsyncThunk(
  'events/postEvents',
  async (event: IEvent) => {
    await fetch('http://localhost:4000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).then(
      (data) => data.json()
        .then((res) => res)
    )
    return event
  }
)

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, action) => {
        state.events = action.payload;
      })
      .addCase(postEvents.fulfilled, (state, action) => {
        state.events.push(action.payload)
      })
  },
})

export default eventSlice.reducer
