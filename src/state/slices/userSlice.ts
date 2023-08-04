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
    website:undefined,
    user_id:''
};
interface profileModel {
  name: string;
  website: string;
  user_id: string;
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
         state.user_id = action.payload.user_id;
      },
    },
  });
  export const { updateUser,updateProfile } = userSlice.actions;
  export const userSelector = (state: RootState) => state.userReducer
  export default userSlice.reducer;