import {combineReducers, configureStore} from "@reduxjs/toolkit";
import eventReducer from './Event/eventSlice'
import reportReducer from './Report/reportSlice'
import newMeetingReducer from './NewMeeting/newMeeting'
import stateRoomReducer from './StateRoom/stateRoomSlice'
import userReducer from './User/usersSlice'
import {eventAPI} from "../services/EventServices";

const rootReducer = combineReducers({
    event:eventReducer,
    report:reportReducer,
    roomState:stateRoomReducer,
    newMeeting: newMeetingReducer,
    user: userReducer,
    [eventAPI.reducerPath]: eventAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(eventAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
