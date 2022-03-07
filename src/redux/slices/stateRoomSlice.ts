import {createSlice} from "@reduxjs/toolkit";

interface StateRoomSlice {
  value: boolean
}

const initialState: StateRoomSlice = {
  value: false
}

export const stateRoomSlice = createSlice({
  name: 'stateRoom',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { setState } = stateRoomSlice.actions;
export default stateRoomSlice.reducer

