import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const adapter = createEntityAdapter({
  selectId: (map) => map.x + ',' + map.y,
});
const initialState = adapter.getInitialState();

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    mapGenerated: (state, action) => {
      state = action.payload;
    },
    tileChanged: (state, action) => {
      console.log(action.payload);
      adapter.addOne(state, action.payload);
    }
  }
})

export const { mapGenerated, tileChanged } = mapSlice.actions

export default mapSlice.reducer