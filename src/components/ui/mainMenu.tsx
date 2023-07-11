import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHome, faSearch, faUser  } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";

const MainMenu:FC = ()=>{
    return(
        <ul className='text-accent p-8' id="mainMenu">
        <li  className='p-2 hover:bg-slightGray cursor-pointer menu-link'>
        <NavLink to={'/home'} className="block" ><FontAwesomeIcon icon={faHome} className="pr-3"></FontAwesomeIcon> Home</NavLink>
        </li>
        <li className='p-2 hover:bg-slightGray cursor-pointer'><FontAwesomeIcon icon={faSearch} className="pr-3"></FontAwesomeIcon>Explore</li>
        <li className='p-2 hover:bg-slightGray cursor-pointer'><FontAwesomeIcon icon={faBell} className="pr-3"></FontAwesomeIcon>Notification</li>
        <li className='p-2 hover:bg-slightGray cursor-pointer'>
        <NavLink to={'/profile'} className="block" ><FontAwesomeIcon icon={faUser} className="pr-3"></FontAwesomeIcon> Profile</NavLink>
        </li>
      </ul>
    )
}

export default MainMenu;