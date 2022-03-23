import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEvent} from "../../models/Event";

export interface initialSliceState {
    event: IEvent
}
const initialState: initialSliceState = {
   event: { 
    agenda: [], 
    attendees: [], 
    elementId: null,
    end: "", 
    presenters: [], 
    start: "", 
    subject: "", 
    userEmail: ""
 }
}

const selectedEventSlice = createSlice({
    name: 'selectedEvent',
    initialState,
    reducers: {
        setSelectedEvent: (state, action:PayloadAction<IEvent>) =>{
            state.event = action.payload
        },
        clearSelectedEvent(state, _) {
            return ({
                ...state,
                ...initialState,
            })
        }
    }
})
export const {setSelectedEvent, clearSelectedEvent} = selectedEventSlice.actions;

export default selectedEventSlice.reducer;

