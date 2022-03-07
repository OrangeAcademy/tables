import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAttendee {
  r_id: string,
  attendee: string
}

export interface IMeetingAttendees {
  attendees: IAttendee[]
}

const initialState: IMeetingAttendees = {
  attendees: []
}

const meetingAttendeesSlice = createSlice({
  name: 'meetingAttendees',
  initialState,
  reducers: {
    addMeetingAttendee: {
      reducer: (state, action: PayloadAction<IAttendee>) => {
          state.attendees.push(action.payload);
      },
      prepare: attendee => attendee  
    },
    removeMeetingAttendee: {
      reducer: (state, action: PayloadAction<IAttendee>) => {
          return ({
            ...state,
          attendees: state.attendees.filter(attendee => attendee.r_id !== action.payload.r_id)
          })
      },
      prepare: attendee => attendee
    }
  }
})

export const { addMeetingAttendee, removeMeetingAttendee } = meetingAttendeesSlice.actions;
export default meetingAttendeesSlice.reducer;