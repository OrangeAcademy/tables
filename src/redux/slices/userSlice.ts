import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IUsers} from "../../interfaces/Users";
import {SERVER_USERS_ROUTE} from "../../constants/paths";

const initialState: IUsers = {
  users: []
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await fetch(SERVER_USERS_ROUTE).then(
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
