import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { string } from "yup";
import UserModel from "../../models/user";
import { RootState } from "../store";

const initialState:UserModel= {
    id:'',
    name:'',
    avatar:'',
    email:'',
    posts:[],
    createdAt:'',
    website:undefined
};
interface profileModel {
  name: string;
  website: string;
  id: string;
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       updateUser:(state, action:PayloadAction<UserModel>) => {
        return state = action.payload;
      },
      updateProfile:(state, action:PayloadAction<profileModel>) => {
         state.website = action.payload.website;
         state.name = action.payload.name;
         state.id = action.payload.id;
      },
    },
  });
  export const { updateUser,updateProfile } = userSlice.actions;
  export const userSelector = (state: RootState) => state.userReducer
  export default userSlice.reducer;