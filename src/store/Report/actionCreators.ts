import {createAsyncThunk} from "@reduxjs/toolkit";
import {SERVER_ISSUES_ROUTE} from "../../constants/paths";
import {ReportState} from "./types";

export const getIssues = createAsyncThunk(
  'issues/getEvents',
  async () => {
    return await fetch(SERVER_ISSUES_ROUTE).then(
      (data) => data.json()
        .then((res) => res)
    )
  }
)

export const postIssue = createAsyncThunk(
  'issues/postIssue',
  async (issue: ReportState) => {
    await fetch(SERVER_ISSUES_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issue),
    }).then(
      (data) => data.json()
        .then((res) => res)
    )
    return issue
  }
)
