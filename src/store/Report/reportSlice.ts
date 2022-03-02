import {createSlice} from "@reduxjs/toolkit";
import {ReportState} from "./types";



interface initialSliceState {
    reports: ReportState[];
}

const initialState: initialSliceState  = {
    reports: [],
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setIssue(state, action) {
            state.reports = action.payload;
        }
    },
    extraReducers: {}
})
export const { setIssue } = reportSlice.actions;
export default reportSlice.reducer;