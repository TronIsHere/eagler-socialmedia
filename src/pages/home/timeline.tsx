import { FC } from "react";
import UserWroteColumn from "../../components/ui/userWrote";
import WriteComponent from "../../components/ui/write";
import PostModel from "../../models/post";

const TimelinePage: FC = () => {
  let posts: PostModel[] = [
    {
      likes: 2,
      user: {
        name: "Erwin Aghajani",
        id: "feranki",
        avatar: "https://placehold.co/500x500?text=Hello+World",
      },
      comments: 10,
      shared: 5,
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
      comments: 100,
      shared: 10,
      content: "this is a test text",
    },
  ];
  return (
    <>
      <div className="w-full bg-primary h-14 flex"></div>
      <WriteComponent></WriteComponent>
      <div className="">
        {posts.map((post) => {
          return (
            <UserWroteColumn
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
