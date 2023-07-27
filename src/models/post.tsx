import { DateTime } from "luxon";
import User from "./user";

export default interface PostModel {
  user: User;
  likes: number;
  comments: number;
  content: string;
  shared: number;
  date: DateTime;
  image?: string;
}
