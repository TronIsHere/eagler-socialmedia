import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onAuthStateChanged } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

import LoginForm from "../../components/forms/loginForm";
import { AuthLayout } from "../../layouts/authLayout";
import { LoadingPage } from "../loading";
import { auth } from "./../../services/firebase";

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [loadingState, changeLoading] = useState<boolean>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate("/home");
        console.log("uid", uid);
        console.log(user);
      } else {
        console.log("object");
        changeLoading(false);
      }
    });
  }, []);
  return (
    <>
      {loadingState ? (
        <LoadingPage />
      ) : (
        <AuthLayout
          buttons={
            <button className="w-full bg-white mt-12 text-black h-10 rounded-md hover:opacity-80">
              <FontAwesomeIcon
                className="pr-2"
                icon={faGoogle}
              ></FontAwesomeIcon>
              Continue with google
            </button>
          }
          form={<LoginForm />}
          title="Log in"
        ></AuthLayout>
      )}
    </>
  );
};

export default LoginPage;
