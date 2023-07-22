import {
  faArrowRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";
import { FC, ReactNode } from "react";
import MainMenu from "../components/ui/mainMenu";

interface props {
  children: ReactNode;
}

export const ThreeColLayout: FC<props> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="grid grid-cols-5 w-full">
        <div className="bg-secondary border-r-2 border-whiteGray ">
          <div className="w-full bg-primary h-14 flex">
            <img
              src="eagleLogo.png"
              alt=""
              className="object-fill logoContainer ml-7"
            />
          </div>
          <MainMenu />
        </div>
        <div className="bg-secondary border-r-2 border-whiteGray col-span-3">
          {children}
        </div>
        <div className="bg-secondary border-whiteGray ">
          <div className="w-full bg-primary h-14 flex">
            <Popover className="relative ">
              <Popover.Button className="focus:outline-none">
                <div className="p-2 pl-5 flex cursor-pointer">
                  <img
                    src="https://placehold.co/500x500?text=Avatar"
                    className="avatar-xsmall rounded-full"
                    alt=""
                  />
                  <span className="text-white mt-2 ml-3">Erwin aghajani</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={"text-white mt-3 ml-3"}
                  ></FontAwesomeIcon>
                </div>
              </Popover.Button>

              <Popover.Panel className="absolute z-10 bg-white ml-5  p-3 w-52 mt-2 rounded-md">
                <div className="flex cursor-pointer">
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                  ></FontAwesomeIcon>
                  <a href="" className="-mt-1 pl-2">
                    Logout
                  </a>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
