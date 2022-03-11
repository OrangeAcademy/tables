import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IStateRoom {
  value: boolean
}

const initialState: IStateRoom = {
  value: false
}

export const stateRoomSlice = createSlice({
  name: 'stateRoom',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
});

export const { setState } = stateRoomSlice.actions;
export default stateRoomSlice.reducer
