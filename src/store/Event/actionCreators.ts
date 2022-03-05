import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Event} from "models/Event";
import {DUMMY_PATH} from "constants/paths";

export const fetchEvents = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get<Event[]>(DUMMY_PATH)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Some error on fetching API")
        }
    }
)
