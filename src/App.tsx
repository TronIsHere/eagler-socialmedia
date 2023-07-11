import './style.css'
import MainMenu from './components/ui/mainMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProfilePage from './pages/home/profile'
import TimelinePage from './pages/home/timeline'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from './main'

function App() {
  return (
    <>
    <div className="grid grid-cols-5 w-full">
      <div className="bg-secondary border-r-2 border-whiteGray ">
      <div className="w-full bg-primary h-14 flex">
      <img src="eagleLogo.png" alt="" className='object-fill logoContainer pl-10'/>
      </div>
        <MainMenu></MainMenu>
      </div>
      <div className="bg-secondary border-r-2 border-whiteGray col-span-3">
      <div className="w-full bg-primary h-14 flex"></div>
      <Outlet></Outlet>
      </div>
      <div className="bg-secondary border-whiteGray ">
      <div className="w-full bg-primary h-14 flex">
        <div className="p-2 pl-5 flex cursor-pointer">
          <img src="https://placehold.co/500x500?text=Avatar" className='avatar-xsmall rounded-full' alt="" />
          <span className='text-white mt-2 ml-3'>Erwin aghajani</span>
          <FontAwesomeIcon icon={faChevronDown} className={'text-white mt-3 ml-3'}></FontAwesomeIcon>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
