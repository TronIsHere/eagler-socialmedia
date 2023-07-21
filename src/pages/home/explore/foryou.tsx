import { FC } from "react";
import UserWroteColumn from "../../../components/ui/userWrote";
import { useAppSelector } from "../../../hooks/useRedux";
import { postSelector } from "../../../state/slices/postSlice";

export const ForyouPage: FC = () => {
  const postList = useAppSelector(postSelector);
  return (
    <>
      {postList.map((post, index) => {
        return (
          <UserWroteColumn
            key={index}
            post={post}
            replies={post.comments >= 1 ? post.comments : 0}
          ></UserWroteColumn>
        );
      })}
    </>
  );
};
