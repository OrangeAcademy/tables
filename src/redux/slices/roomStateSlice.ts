import { createSlice } from "@reduxjs/toolkit";

interface IRoomState {
  isBusy: boolean;

}

const initialState: IRoomState = {
  isBusy: false
}

const roomStateSlice = createSlice({
  name: 'roomState',
  initialState,
  reducers: {
    setBusy: (state, _) => ({
      ...state,
      isBusy: true
    }),
    setAvailable: (state, _) => ({
      ...state,
      isBusy: false
    }),
    toggleState: (state, _ ) => ({
      ...state,
      isBusy: !state.isBusy
    })
  }
})

export const {setBusy, setAvailable, toggleState} = roomStateSlice.actions;
export default roomStateSlice.reducer;