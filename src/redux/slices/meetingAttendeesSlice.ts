import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface IAttendee {
  attendee: string
}

export interface IAttendeeRedux extends IAttendee {
  r_id: string,
}

export interface IMeetingAttendees {
  attendees: IAttendeeRedux[]
}

const initialState: IMeetingAttendees = {
  attendees: []
}

const meetingAttendeesSlice = createSlice({
  name: 'meetingAttendees',
  initialState,
  reducers: {
    addMeetingAttendee: {
      reducer: (state, action: PayloadAction<IAttendeeRedux>) => {
          state.attendees.push(action.payload);
      },
      prepare: payload => ({
        payload: {
          ...payload,
          r_id: nanoid()
        }
      })  
    },
    removeMeetingAttendee:(state, action: PayloadAction<IAttendeeRedux>) => {
          return ({
            ...state,
          attendees: state.attendees.filter(attendee => attendee.r_id !== action.payload.r_id)
          })
      }
  }
})

export const { addMeetingAttendee, removeMeetingAttendee } = meetingAttendeesSlice.actions;
export default meetingAttendeesSlice.reducer;