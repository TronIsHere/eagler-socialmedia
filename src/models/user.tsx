import Posts from "./posts";

interface User {
  name: string;
  email: string;
  posts: Posts[];
}

export default User;
