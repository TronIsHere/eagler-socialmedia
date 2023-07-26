import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import PostModel from "../../models/post";
import { RootState } from "../store";
const initialState:PostModel[]=[      {
  likes: 2,
  user: {
    name: "Erwin Aghajani",
    id: "feranki",
    avatar: "https://placehold.co/500x500?text=Hello+World",
  },
  comments: 10,
  shared: 5,
  date:DateTime.now().minus({days:3}),
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vero perferendis labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque temporibus beatae est, hic aut qui dolorem, voluptates rerum distinctio dignissimos eos ea! Veniam magni est nobis sequi, iusto quae!",
},
{
  likes: 112,
  user: {
    name: "mamad taghavi 🐗",
    id: "naz02",
    avatar: "https://placehold.co/500x500?text=Hello+World2",
  },
  date:DateTime.now().minus({days:10}),
  comments: 100,
  shared: 10,
  content: "this is a test text",
},]
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
     addPost:(state, action:PayloadAction<PostModel>) => {
      state.push(action.payload!);
    },
  },
});
export const { addPost } = postSlice.actions;
export const postSelector = (state: RootState) => state.postReducer;
export default postSlice.reducer;
