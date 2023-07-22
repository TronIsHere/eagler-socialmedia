import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../services/firebase";
import RegisterForm from "../../components/forms/registerForm";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../layouts/authLayout";
import { LoadingPage } from "../loading";

const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const [loadingState, changeLoading] = useState<boolean>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigate("/");
        console.log("uid", uid);
        console.log(user);
      } else {
        // User is signed out
        // ...
        changeLoading(false);
        console.log("user is logged out");
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
          form={<RegisterForm></RegisterForm>}
          title="Register"
        ></AuthLayout>
      )}
    </>
  );
};
export default RegisterPage;
