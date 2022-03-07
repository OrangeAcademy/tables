import {createSlice} from "@reduxjs/toolkit";

interface StateRoom {
  value: boolean
}

const initialState: StateRoom = {
  value: false
}

export const stateRoomSlice = createSlice({
  name: 'stateRoom',
  initialState,
  reducers: {
    setBusy: state => {
      state.value = true
    },
    setFree: state => {
      state.value = false
    }
  }
});

export const { setBusy, setFree } = stateRoomSlice.actions;
export default stateRoomSlice.reducer

