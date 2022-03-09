import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


export interface IReportIssue {
  issueId: string,
  email: string,
  userId: number,
  description: string,
  issueType: string
}

export interface ReportIssueSliceState {
  reports: IReportIssue[];
}


const initialState: ReportIssueSliceState  = {
  reports: []
};


const reportIssueSlice = createSlice({
  name: 'reportIssue',
  initialState,
  reducers: {
    addReport: {
      reducer: (state, action: PayloadAction<IReportIssue>) => {
        state.reports.push({
          ...action.payload,
          issueId: nanoid()
        })
      },
      prepare: (reportIssue) => {
        return {...reportIssue}
      }
      }
    }
})

export const { addReport } = reportIssueSlice.actions;
export default reportIssueSlice.reducer;
