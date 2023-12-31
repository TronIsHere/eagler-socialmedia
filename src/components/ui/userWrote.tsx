import {
  faBookmark,
  faCommentDots,
  faFeather,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import { FC, useState } from "react";
import PostModel from "../../models/post";
import ShowImage from "./modals/showImage";

interface props {
  replies: number;
  post: PostModel;
  imgSrc?: string;
}
const UserWroteColumn: FC<props> = ({ replies, post, imgSrc }) => {
  const [imageShowState, setImageShow] = useState(false);
  return (
    <div className="border-b-2 border-whiteGray pb-8 p-5">
      <div className="flex">
        <img
          src={post.user.avatar}
          alt=""
          className="rounded-full avatar-small"
        />
        <span className="text-white ml-5">{post.user.name}</span>
        <span className="text-low-color-accent ml-2 cursor-pointer hover:text-accent">
          @{post.user.id}
        </span>
        <div className="bg-low-color-accent rounded-full w-1 h-1 custom-dot-margin"></div>
        <div className="text-low-color-accent ml-2">
          {DateTime.fromISO(post.date).toRelativeCalendar()}
        </div>
      </div>

      <div className="ml-16 -mt-3">
        <p className=" text-white preline">{post.content}</p>
        <div className="">
          <div className="flex ">
            {post.image ? (
              <img
                src={post.image}
                alt=""
                width={500}
                className="rounded-lg mt-5 cursor-pointer border-slightGray border-1 "
                onClick={() => {
                  setImageShow(true);
                }}
              />
            ) : null}
            <ShowImage
              imgSrc={post.image!}
              OpenModal={imageShowState}
              onCloseCallback={() => {
                setImageShow(false);
              }}
            ></ShowImage>
            ;
          </div>
          <div className="flex mt-5 text-low-color-accent">
            <div className={"cursor-pointer -mt-1 hover:text-white"}>
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span className="ml-2 -mt-1 mr-4">{post.likes}</span>
            </div>
            <div className={"cursor-pointer -mt-1 hover:text-white"}>
              <FontAwesomeIcon icon={faFeather}></FontAwesomeIcon>
              <span className="ml-2 -mt-1 mr-4">{post.comments}</span>
            </div>
            <div className={"cursor-pointer -mt-1 hover:text-white"}>
              <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
              <span className="ml-2 -mt-1 mr-4">{post.shared}</span>
            </div>
            <div className={"cursor-pointer -mt-1 hover:text-white"}>
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
            </div>
          </div>
        </div>
        {replies > 0 ? (
          <div className="flex">
            <img
              src="curved-right-arrow.png"
              alt=""
              width={25}
              className={"ml-2 mt-3"}
            />
            <a href="" className="ml-2 mt-3  text-links">
              {replies} More Replies
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserWroteColumn;
