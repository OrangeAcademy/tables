import {createAsyncThunk} from '@reduxjs/toolkit';
import {SERVER_USERS_ROUTE} from "../../constants/paths";

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
