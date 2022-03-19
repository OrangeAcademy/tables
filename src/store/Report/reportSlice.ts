import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReportState} from "./types";
import {postIssue} from "./actionCreators";

interface initialSliceState {
  reports: ReportState[];
}

const initialState: initialSliceState = {
  reports: [],
}

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: {
    [postIssue.fulfilled.type]: (state, action: PayloadAction<ReportState[]>) => {
      state.reports = action.payload;
    },
  }
})

export default reportSlice.reducer;
