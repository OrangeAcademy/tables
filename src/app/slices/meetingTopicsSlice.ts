import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITopic {
  topicID: string,
  presenter: string,
  topic: string
}

export interface IMeetingTopics {
  presenters: ITopic[]
}

const initialState: IMeetingTopics = {
  presenters: []
}

const meetingTopicsSlice = createSlice({
  name: 'meetingTopics',
  initialState,
  reducers: {
    addMeetingTopic: {
      reducer: (state, action: PayloadAction<ITopic>) => {
          state.presenters.push({
            ...action.payload
          });
      },
      prepare: topic => topic  
    },
    removeMeetingTopic: {
      reducer: (state, action: PayloadAction<ITopic>) => {
          return ({
            ...state,
          presenters: state.presenters.filter(topic => topic.topicID !== action.payload.topicID)
          })
      },
      prepare: topic => topic
    }
  }
})

export const { addMeetingTopic, removeMeetingTopic } = meetingTopicsSlice.actions;
export default meetingTopicsSlice.reducer;