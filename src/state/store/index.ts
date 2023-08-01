import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from '../slices/postSlice'
import userReducer from '../slices/userSlice'
import writeReducer from '../slices/writeSlice'
// ...


export const store = configureStore({
  reducer: {
    postReducer,
    userReducer,
    writeReducer
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: ['user/updateUser','post/addPost'],  
  //   },
  // }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch