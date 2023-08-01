import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const MainMenu: FC = () => {
  console.log("first");
  return (
    <ul className="text-accent p-8" id="mainMenu">
      <li className="p-2 hover:bg-slightGray cursor-pointer menu-link">
        <NavLink to={"/home"} className="block">
          <FontAwesomeIcon icon={faHome} className="pr-3"></FontAwesomeIcon>{" "}
          Home
        </NavLink>
      </li>
      <li className="p-2 hover:bg-slightGray cursor-pointer">
        <NavLink to={"/explore"} className="block">
          <FontAwesomeIcon icon={faSearch} className="pr-3"></FontAwesomeIcon>{" "}
          Explore
        </NavLink>
      </li>
      <li className="p-2 hover:bg-slightGray cursor-pointer">
        <NavLink to={"/notifications"} className="block">
          <FontAwesomeIcon icon={faBell} className="pr-3"></FontAwesomeIcon>{" "}
          Notifications
        </NavLink>
      </li>
      <li className="p-2 hover:bg-slightGray cursor-pointer">
        <NavLink to={"/profile"} className="block">
          <FontAwesomeIcon icon={faUser} className="pr-3"></FontAwesomeIcon>{" "}
          Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
