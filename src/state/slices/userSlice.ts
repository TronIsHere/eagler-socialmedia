import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserModel from "../../models/user";
import { RootState } from "../store";

const initialState:UserModel= {
    id:'',
    name:'',
    avatar:'',
    email:'',
    posts:[],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       updateUser:(state, action:PayloadAction<UserModel>) => {
        state = action.payload;
      },
    },
  });
  export const { updateUser } = userSlice.actions;
  export const userSelector = (state: RootState) => state.rootReducer;
  export default userSlice.reducer;