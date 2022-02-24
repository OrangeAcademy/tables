import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUsers} from "../../interfaces/Users";
import {IUser} from "../../interfaces/User";

const initialState: IUsers = {
  users: []
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('/api').then(
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
      builder.addCase(fetchUsers.fulfilled, (state: any, action: PayloadAction<IUser>) => {
        state.users = action.payload
      })
    },
  }
);

export default usersSlice.reducer