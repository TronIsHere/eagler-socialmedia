import {
  faArrowRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { DateTime } from "luxon";
import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainMenu from "../components/ui/mainMenu";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { updateUser, userSelector } from "../state/slices/userSlice";
import { auth } from "./../services/firebase";

interface props {
  children: ReactNode;
}

export const ThreeColLayout: FC<props> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const userData = useAppSelector(userSelector);
  console.log(userData);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid, email, metadata } = user;
        dispatch(
          updateUser({
            id: uid,
            name: displayName!,
            avatar: "",
            email: email!,
            posts: [],
            createdAt: metadata.creationTime!,
          })
        );
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  const navigate = useNavigate();

  const handleLogout = (event: any) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
                  <span className="text-white mt-2 ml-3">{userData.name}</span>
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
                  <button className="-mt-1 pl-2" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
