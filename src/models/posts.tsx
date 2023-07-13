import User from "./user";

export default interface Posts {
  user: User;
  likes: number;
  comments: [];
  content: string;
}
