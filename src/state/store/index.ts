import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../slices/postSlice'
// ...

export const store = configureStore({
  reducer: {
    postReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch