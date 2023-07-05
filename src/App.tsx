import './style.css'
import WriteComponent from './components/ui/write'
import UserWroteColumn from './components/ui/userWrote'
import MainMenu from './components/ui/mainMenu'

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
        <WriteComponent></WriteComponent>
        <div className=''>
          <UserWroteColumn></UserWroteColumn>
          <UserWroteColumn hasReplies={true}></UserWroteColumn>
          
        </div>
      </div>
      <div className="bg-secondary border-whiteGray "></div>
    </div>
    </>
  )
}

export default App
