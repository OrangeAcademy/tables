import {combineReducers, configureStore} from "@reduxjs/toolkit";
import eventReducer from './Event/eventSlice'
import reportReducer from './Report/reportSlice'
import {eventAPI} from "../services/EventServices";

const rootReducer = combineReducers({
    event:eventReducer,report:reportReducer,
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
