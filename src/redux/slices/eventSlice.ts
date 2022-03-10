import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IEvent} from "../../interfaces/Event";
import {IEvents} from "../../interfaces/Events";
import {SERVER_EVENTS_ROUTE} from "../../constants/paths";


const controller = new AbortController();

const initialState: IEvents = {
  events: []
}

// export const getEvents = createAsyncThunk(
//   'events/fetchEvents',
//   async () => await (await (fetch(SERVER_EVENTS_ROUTE))).json()
// )

export const getEvents = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    try{
      const response = await fetch(SERVER_EVENTS_ROUTE);
      return response.json();
    } catch(e) {
      console.error("Redux (events/fetchEvents) failed with ", e);
      throw Error;
    } finally {

    }
  }
)

export const postEvents = createAsyncThunk(
  'events/postEvents',
  async (event: IEvent) => {
    await fetch(SERVER_EVENTS_ROUTE, {
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

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id: number) => {
    return await fetch(`${SERVER_EVENTS_ROUTE}/${id}`, {
      method: 'DELETE',
    }).then(
      (data) => data.json()
        .then((res) => res)
    )
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
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events.splice(state.events.findIndex(item => item.elementId === action.payload), 1);
      })
  }
})

export default eventSlice.reducer
