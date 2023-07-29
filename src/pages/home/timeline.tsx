import { FC, useEffect } from "react";
import UserWroteColumn from "../../components/ui/userWrote";
import WriteComponent from "../../components/ui/write";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import PostModel from "../../models/post";
import { postSelector } from "../../state/slices/postSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth, storage } from "./../../services/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { updateUser, userSelector } from "../../state/slices/userSlice";

const TimelinePage: FC = () => {
  const postList = useAppSelector(postSelector);
  const dispatch = useAppDispatch();
  const userData = useAppSelector(userSelector);
  useEffect(() => {
    listAll(ref(storage, "images/")).then((response) => {
      console.log(response.items[0].name);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url);
        });
      });
    });

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        const { displayName, uid, email } = user;
        await dispatch(
          updateUser({
            id: uid,
            name: displayName!,
            avatar: "",
            email: email!,
            posts: [],
          })
        );
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
