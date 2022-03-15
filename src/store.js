import { configureStore } from '@reduxjs/toolkit'

import mapReducer from './reducers/mapReducer'
import mobReducer from './reducers/mobReducer'
import playerReducer from './reducers/playerReducer'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    map: mapReducer,
    mob: mobReducer,
    player: playerReducer
  }
})

export default store