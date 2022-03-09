import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Event} from "models/Event";
import {DUMMY_PATH, MONGO_DB_PATH} from "constants/paths";

export const fetchEvents = createAsyncThunk(
    'data/beta',
    async (_, thunkAPI) => {
        try {
            console.log('events are fetched');
            const {data} = await axios.get<Event[]>(MONGO_DB_PATH)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Some error on fetching API")
        }
    }
)
