import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MONGO_DB_PATH, SERVER_EVENTS_ROUTE } from 'constants/paths';
import { NewMeeting } from 'store/NewMeeting/newMeeting';

export const fetchEvents = createAsyncThunk(
  'data/beta',
  async (_, thunkAPI) => {
    try {
      console.log('events are fetched');
      const { data } = await axios.get<NewMeeting[]>(MONGO_DB_PATH);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Some error on fetching API');
    }
  }
);

export const getEvents = createAsyncThunk('events/fetchEvents', async () => {
  return await fetch(SERVER_EVENTS_ROUTE).then((data) =>
    data.json().then((res) => res)
  );
});

export const postEvents = createAsyncThunk(
  'events/postEvents',
  async (event: NewMeeting) => {
    await fetch(SERVER_EVENTS_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).then((data) => data.json().then((res) => res));
    return event;
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id: number) => {
    return await fetch(`${SERVER_EVENTS_ROUTE}/${id}`, {
      method: 'DELETE',
    }).then((data) => data.json().then((res) => res));
  }
);
