import Posts from "./post";

export default interface UserModel {
  name: string;
  id: string;
  avatar: string;
  email: string;
  posts: Posts[];
  createdAt: string;
  website?: string;
  user_id?: string;
}
