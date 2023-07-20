import User from "./user";

export default interface PostModel {
  user: User;
  likes: number;
  comments: number;
  content: string;
  shared: number;
}