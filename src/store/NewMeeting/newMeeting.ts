import {createSlice} from "@reduxjs/toolkit";
export interface MeetingAgenda {
    topic: string;
    presenter: string
}
 export interface NewMeeting {
    userEmail: string | null;
    subject: string | null;
    start: Date | null;
    end: Date | null;
    agenda: MeetingAgenda[];
    topic: string;
    presenter: string;
    attendees: string[];
    duration: number| null;
}

const initialState: NewMeeting = {
    userEmail: null,
    subject: null,
    start: null,
    end: null,
    agenda: [] as MeetingAgenda[],
    attendees: [],
    topic: '',
    presenter: '',
    duration: null
};

export const newMeetingSlice = createSlice({
    name: 'newMeeting',
    initialState,
    reducers: {
        setUserEmail(state, action) {
            state.userEmail = action.payload;
        },
        setMeetingDuration(state, action) {
            state.duration = action.payload;
        },
        setSubject(state, action) {
            state.subject = action.payload;
        },
        setStartTime(state, action) {
            state.start = action.payload;
        },setEndTime(state, action) {
            state.end = action.payload;
        },
        setAgenda(state, action) {
            return ({
                ...state,
                agenda: action.payload
          
              })
        },
        setTopic(state, action) {
            state.topic = action.payload;
        },
        setPresenter(state, action) {
            state.presenter = action.payload;
        },
        setAttendee(state,action){
            state.attendees.push(action.payload)
        },
        removeAttende(state, action) {
            return ({
                ...state,
                attendees: state.attendees.filter(atendee => atendee !== action.payload)
            })
        },
        clearReservation(state, _) {
            return ({
                ...state,
                initialState
            })
        }
    },
    extraReducers: {}
});

export default newMeetingSlice.reducer;
export const {
    setUserEmail,
    setMeetingDuration, setSubject,
    setStartTime,setEndTime, setAgenda,
    setTopic,setPresenter,
    setAttendee,
    removeAttende,
    clearReservation
} = newMeetingSlice.actions;
