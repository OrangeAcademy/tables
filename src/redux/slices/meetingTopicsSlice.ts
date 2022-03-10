import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITopic {
  presenter: string,
  topic: string
}


export interface IMeetingTopics {
  presenters: IMeetingTopicRedux[],
}

interface ITopicReduxId {
  r_id: string,
}

export interface IMeetingTopicRedux extends ITopicReduxId, ITopic {
  confirmationStatus: 0 | 1,

} 

const initialState: IMeetingTopics = {
  presenters: [],
}

const meetingTopicsSlice = createSlice({
  name: 'meetingTopics',
  initialState,
  reducers: {
    storeMeetingTopics: (state, action: PayloadAction<IMeetingTopicRedux[]>) => {
      return ({
        ...state,
        presenters: [...Object.values(action.payload) ]
  
      })
    },
    // addMeetingTopic: {
    //   reducer: (state, action: PayloadAction<IMeetingTopicRedux>) => {
    //       state.presenters.push(action.payload);
    //   },
    //   prepare: payload => ({
    //     payload: {
    //       ...payload,
    //       r_id: nanoid(),
    //       confirmationStatus: 0
    //     }
    //   })
    // },
    // removeMeetingTopic: (state, action: PayloadAction<ITopicReduxId>) => {
    //       return ({
    //         ...state,
    //       presenters: state.presenters.filter(topic => topic.r_id !== action.payload.r_id),
    //       meetingTopicsBin: [
    //         ...state.meetingTopicsBin,
    //         ...state.presenters.filter(topic => topic.r_id === action.payload.r_id)
    //       ]
    //       })
    //   },
    // confirmMeetingTopics: (state) => {
    //       return ({
    //         ...state,
    //         presenters: state.presenters.map(meetingTopic => ({...meetingTopic, confirmationStatus: 1})),
    //         meetingTopicsBin: []
    //       })
    //   },
    // cancelMeetingTopic: (state) => {
    //       return ({
    //         ...state,
    //         presenters:[
    //           ...state.presenters.filter(meetingTopic => meetingTopic.confirmationStatus === 1),
    //           ...state.meetingTopicsBin
    //         ]
    //       })
    // },

  }
})

export const { storeMeetingTopics } = meetingTopicsSlice.actions;
export default meetingTopicsSlice.reducer;