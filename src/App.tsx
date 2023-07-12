import './style.css'
import MainMenu from './components/ui/mainMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProfilePage from './pages/home/profile'
import TimelinePage from './pages/home/timeline'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from './main'
import { PageRow } from './components/ui/grids/pageRow'

function App() {
  return (
    <PageRow 
    gridOneChild={<MainMenu/>}
    gridTwoChild={<Outlet/>}
    gridThreeChild={<FontAwesomeIcon icon={faChevronDown} className={'text-white mt-3 ml-3'}></FontAwesomeIcon>}
    />
  )
}

export default App
