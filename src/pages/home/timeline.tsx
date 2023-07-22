import { FC, useEffect } from "react";
import UserWroteColumn from "../../components/ui/userWrote";
import WriteComponent from "../../components/ui/write";
import { useAppSelector } from "../../hooks/useRedux";
import PostModel from "../../models/post";
import { postSelector } from "../../state/slices/postSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../services/firebase";

const TimelinePage: FC = () => {
  const postList = useAppSelector(postSelector);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
        console.log(user);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <>
      <div className="w-full bg-primary h-14 flex"></div>
      <WriteComponent></WriteComponent>
      <div className="">
        {postList.map((post: PostModel, index: number) => {
          return (
            <UserWroteColumn
              key={index}
              replies={post.comments >= 1 ? post.comments : 0}
              post={post}
            ></UserWroteColumn>
          );
        })}
      </div>
    </>
  );
};
export default TimelinePage;
