import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircle, faGift, faHome, faImage, faPaperPlane, faSearch, faSmile, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'

const MainMenu:FC = ()=>{
    return(
        <ul className='text-accent p-8'>
        <li className='p-2 hover:bg-slightGray cursor-pointer'><FontAwesomeIcon icon={faHome} className="pr-3"></FontAwesomeIcon>Home</li>
        <li className='p-2 hover:bg-slightGray cursor-pointer'><FontAwesomeIcon icon={faSearch} className="pr-3"></FontAwesomeIcon>Explore</li>
        <li className='p-2 hover:bg-slightGray cursor-pointer'><FontAwesomeIcon icon={faBell} className="pr-3"></FontAwesomeIcon>Notification</li>
        <li className='p-2 hover:bg-slightGray cursor-pointer'><FontAwesomeIcon icon={faUser} className="pr-3"></FontAwesomeIcon>Profile</li>
      </ul>
    )
}

export default MainMenu;