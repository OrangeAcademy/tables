import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Event} from "models/Event";
import {fetchEvents} from "./actionCreators";
import {EventState} from "./types";

const initialState: EventState = {
    events: [],
    isLoading: false,
    error: '',
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchEvents.fulfilled.type]: (state, action: PayloadAction<Event[]>) => {
            state.isLoading = false;
            state.error = ''
            state.events = action.payload;
        },
        [fetchEvents.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchEvents.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default eventSlice.reducer;
