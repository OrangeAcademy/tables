import {createSlice} from "@reduxjs/toolkit";

import { IEvent, IPresenters } from "../../interfaces/Event";
import { PayloadAction } from "@reduxjs/toolkit";


const initialState: IEvent = {
  elementId: 0,
  end: "",
  occurrencesEnd: "",
  start: "",
  subject: "",
  presenters: Array<IPresenters>({
    presenter: "",
    topic: ""
  }),
  attendees: Array<string>("")
}

const upcomingEventSlice = createSlice({
  name: 'upcomingEvent',
  initialState,
  reducers: {
    storeUpcomingEvent: (_, action: PayloadAction<IEvent>) => ({...action.payload}),
  }
})

export const {storeUpcomingEvent} = upcomingEventSlice.actions;
export default upcomingEventSlice.reducer;
