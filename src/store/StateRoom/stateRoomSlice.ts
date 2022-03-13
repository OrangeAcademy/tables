import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "models/Event";
import { NewMeeting } from "store/NewMeeting/newMeeting";

export interface IRoomState {
  roomLocation: string,
  roomName: string,
  roomId: number | string,
  nextEventStart: string,
  isBusy: boolean,
  isLessThan15Mins: boolean,
  upcomingEvent: NewMeeting | IEvent | null
}

const initialState: IRoomState = {
  roomLocation: "Orange {kITchen}",
  roomName: 'Agora',
  roomId: 1,
  nextEventStart: '',
  isBusy: false,
  isLessThan15Mins: false,
  upcomingEvent: null
}

export const stateRoomSlice = createSlice({
  name: 'roomState',
  initialState,
  reducers: {
    // setState: (state, action: PayloadAction<boolean>) => state.isBusy = action.payload,
    storeUpcomingEvent: (state, action) => {
      state.upcomingEvent = action.payload
    },
    setNextEventStart: (state, action) => {
      state.nextEventStart = action.payload.toString()
    },
    setRoomStatus: (state, action: PayloadAction<boolean>) => {
      state.isBusy = action.payload
    },
    setIsLessThan15Mins: (state, action) => {
      state.isLessThan15Mins = action.payload
    },

  }
});

export const { storeUpcomingEvent, setNextEventStart, setRoomStatus, setIsLessThan15Mins } = stateRoomSlice.actions;
export default stateRoomSlice.reducer
