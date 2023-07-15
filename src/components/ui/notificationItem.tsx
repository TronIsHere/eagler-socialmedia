import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface props {
  name: string;
  icon: IconDefinition;
  badgeColor?: string;
}

export const NotificationItem: FC<props> = ({ icon, badgeColor, name }) => {
  return (
    <>
      <div className="flex p-5 cursor-pointer border-b border-slightGray">
        <div className="relative">
          <img
            src="https://placehold.co/500x500?text=Avatar"
            alt=""
            className="rounded-full avatar-medium"
          />
          <div className="flex -mt-5 ml-7 justify-end">
            <div
              className={`${
                badgeColor ? badgeColor : "bg-red-600"
              } w-7 h-7 flex justify-center items-center rounded-full`}
            >
              <FontAwesomeIcon
                icon={icon}
                color="white"
                size="xs"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className=" text-white flex items-center ml-5">
          <p>
            <span className="font-bold">{name} </span>tweeted recently
          </p>
        </div>
      </div>
    </>
  );
};
