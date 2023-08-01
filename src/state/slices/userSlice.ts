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
interface partialModel{
  row:string,
  data:string
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       updateUser:(state, action:PayloadAction<UserModel>) => {
        return state = action.payload;
      },
      updateWebsite:(state, action:PayloadAction<string>) => {
         state.website = action.payload;
      },
    },
  });
  export const { updateUser,updateWebsite } = userSlice.actions;
  export const userSelector = (state: RootState) => state.userReducer
  export default userSlice.reducer;