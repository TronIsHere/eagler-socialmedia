import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import LoginForm from "../../components/ui/forms/loginForm";


const LoginPage:FC = ()=>{
    
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white">
            <div className="flex justify-center items-center h-screen  ">
                <div className="flex-col w-3/4   ">
                <h1 className="text-4xl font-bold">Log in</h1>
                <LoginForm></LoginForm>
                <div className="grid grid-cols-5 mt-12">
                    <div className="w-full h-1 bg-slightGray col-span-2"></div>
                    <div className="w-full h-1 flex justify-center items-center">
                        <span className="text-lg">or</span>
                    </div>
                    <div className="w-full h-1 bg-slightGray col-span-2"></div>
                </div>
                <button className="w-full bg-white mt-12 text-black h-10 rounded-md hover:opacity-80"><FontAwesomeIcon className="pr-2" icon={faGoogle}></FontAwesomeIcon>Continue with google</button>
                </div>
            </div>
            <div className="w-full h-screen side-login">
                
            </div>
        </div>
        </>
    )
}

export default LoginPage;