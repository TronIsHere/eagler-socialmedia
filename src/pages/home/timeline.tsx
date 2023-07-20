import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserWroteColumn from "../../components/ui/userWrote";
import WriteComponent from "../../components/ui/write";
import { useAppSelector } from "../../hooks/useRedux";
import PostModel from "../../models/post";
import { postSelector } from "../../state/slices/postSlice";
import { RootState } from "../../state/store";

const TimelinePage: FC = () => {
  const postList = useAppSelector(postSelector);

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
