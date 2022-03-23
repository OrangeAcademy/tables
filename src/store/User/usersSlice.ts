import {createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./actionCreators";
import {UserState} from "./types";

const initialState: UserState = {
  users: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
    },
  }
);

export default usersSlice.reducer
