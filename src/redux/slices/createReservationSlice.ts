import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IEvent, IPresenters} from "../../interfaces/Event";
import {IDateTimeValidation} from "../../components/CreateMeetingReservation/DateTimePicker/DateTimePickerRange";

interface ICreateReservationSlice {
  meeting: IEvent,
  preferences: IDateTimeValidation
}


const initialState: ICreateReservationSlice = {
  meeting: {
    elementId: 0,
    end: "",
    occurrencesEnd: "",
    start: "",
    subject: "",
    presenters: Array<IPresenters>({
      presenter: "",
      topic: ""
    }),
    attendees: Array<string>("")},

  preferences: {
    preferredMeetLengthMins: undefined,
    chosenDateTime: undefined
  }
}

const createReservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers:{
    addPreferredLen: (state, action: PayloadAction<{duration: number}>) =>( {
      ...state,
      preferences: {
        ...state.preferences,
        preferredMeetLengthMins: action.payload.duration
      }
    }),
    addPreferredStart: (state, action: PayloadAction<Date>) =>( {
      ...state,
      preferences: {
        ...state.preferences,
        chosenDateTime: action.payload
      }
    })
  }
})

export const {addPreferredLen, addPreferredStart} = createReservationSlice.actions;
export default createReservationSlice.reducer;