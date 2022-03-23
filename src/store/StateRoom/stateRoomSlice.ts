import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent, IPresenters } from "models/Event";
import { NewMeeting } from "store/NewMeeting/newMeeting";

export interface IRoomState {
  roomLocation: string,
  roomName: string,
  roomId: number | string,
  nextEventStart: string,
  isBusy: boolean,
  isLessThan15Mins: boolean,
  autoBookConfig: {
    isAutoBookable: boolean,
    duration: number | null
  },
  upcomingEvent: NewMeeting | IEvent | null,
  snackbarVisibility: boolean,
  snackbarMessage: string,
  snackbarSeverity: string
}



const upcomingEventInit = {
  elementId: 0,
  end: new Date(new Date().getFullYear() + 1, 11, 31).toString(),
  start: new Date(new Date().getFullYear() + 1, 11, 31).toString(),
  occurrencesEnd: "",
  subject: "",
  agenda: [],
  presenters: Array<IPresenters>({
    presenter: "",
    topic: ""
  }),
  attendees: Array<string>("")
}

const initialState: IRoomState = {
  roomLocation: "Orange {kITchen}",
  roomName: 'Agora',
  roomId: 1,
  nextEventStart: '',
  isBusy: false,
  isLessThan15Mins: false,
  autoBookConfig: {
    isAutoBookable: false,
    duration: null
  },
  upcomingEvent: upcomingEventInit,
  snackbarVisibility: false,
  snackbarMessage: '',
  snackbarSeverity: 'success'
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
    setShouldAutoBook: (state, action) => {
      state.autoBookConfig.isAutoBookable = action.payload
    },
    setAutoBookDuration: (state, action) => {
      state.autoBookConfig.duration = action.payload
    },
    setSnackbarVisibility: (state, action) => {
      state.snackbarVisibility = action.payload
    },
    setSnackbarMessage: (state, action) => {
      state.snackbarMessage = action.payload
    },
    setSnackbarSeverity: (state, action) => {
      state.snackbarSeverity = action.payload
    }
  }
});

export const { setAutoBookDuration, setShouldAutoBook, storeUpcomingEvent, setNextEventStart, setRoomStatus, setIsLessThan15Mins, setSnackbarVisibility, setSnackbarMessage,setSnackbarSeverity } = stateRoomSlice.actions;
export default stateRoomSlice.reducer
