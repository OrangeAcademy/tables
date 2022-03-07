import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUsers} from "../../interfaces/Users";

const initialState: IUsers = {
  users: []
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await fetch('http://localhost:4000/api/users').then(
      (data) => data.json()
        .then((res) => res)
    )
    return response
  }
)

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
