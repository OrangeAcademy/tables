import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEvent} from "models/Event";
import {deleteEvent, fetchEvents, getEvents, postEvents} from "./actionCreators";
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
        [fetchEvents.fulfilled.type]: (state, action: PayloadAction<IEvent[]>) => {
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
        [getEvents.fulfilled.type]: (state,  action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
            state.isLoading = false;
            state.error = ''
        },
        [getEvents.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getEvents.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [deleteEvent.fulfilled.type]: (state,  action: PayloadAction<number>) => {
            state.events.splice(state.events.findIndex(item => item._id === action.payload), 1);
            state.isLoading = false;
            state.error = ''
        },
        [deleteEvent.pending.type]: (state) => {
            state.isLoading = true;
        },
        [deleteEvent.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [postEvents.fulfilled.type]: (state, action: PayloadAction<IEvent>) => {
            state.isLoading = false;
            state.error = ''
            state.events.push(action.payload);
        },
        [postEvents.pending.type]: (state) => {
            state.isLoading = true;
        },
        [postEvents.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default eventSlice.reducer;
