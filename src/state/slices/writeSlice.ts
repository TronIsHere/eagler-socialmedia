import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState= {
   imageUrl:''
};

const writeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       updateImageUrl:(state, action:PayloadAction<string>) => {
        state.imageUrl = action.payload
      },
    },
  });
  export const { updateImageUrl } = writeSlice.actions;
  export const writeSelector = (state: RootState) => state.writeReducer
  export default writeSlice.reducer;