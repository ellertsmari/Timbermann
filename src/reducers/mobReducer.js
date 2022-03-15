import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'


const adapter = createEntityAdapter()
const initialState = adapter.getInitialState()

const mobSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    addMob: (state, action) => {
      adapter.addOne(state, action.payload);
    }
  }
})

export const { addMob } = mobSlice.actions

export default mobSlice.reducer