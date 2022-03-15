import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  position: {x: 0, y: 0},
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playerMoved: (state, action) => {
      state.position = action.payload;
    }
  }
})

export const { playerMoved } = playerSlice.actions

export default playerSlice.reducer