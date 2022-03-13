import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IEvent} from "models/Event";
import {MONGO_DB_PATH, SERVER_EVENTS_ROUTE} from "constants/paths";

export const fetchEvents = createAsyncThunk(
    'data/beta',
    async (_, thunkAPI) => {
        try {
            console.log('events are fetched');
            const {data} = await axios.get<IEvent[]>(MONGO_DB_PATH)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Some error on fetching API")
        }
    }
)

export const getEvents = createAsyncThunk(
  'events/fetchEvents',
  async () => {
    return await fetch(SERVER_EVENTS_ROUTE).then(
      (data) => data.json()
        .then((res) => res)
    )
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
  async (id: string) => {
    console.log(id)
    return await fetch(`${SERVER_EVENTS_ROUTE}/${id}`, {
      method: 'DELETE',
    }).then(
      (data) => data.json()
        .then((res) => res)
    )
  }
)
