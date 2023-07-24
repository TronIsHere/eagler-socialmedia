import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import AuthTextInput from "../ui/auth/authInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../services/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface LoginFormValues {
  email: string;
  password: string;
}
const innerLoginForm = (props: FormikProps<LoginFormValues>) => {
  return (
    <Form className="mt-10">
      <AuthTextInput label="Email" name="email"></AuthTextInput>
      <AuthTextInput
        label="Password"
        type="password"
        labelClass="mt-4"
        name="password"
      ></AuthTextInput>
      <button
        type="submit"
        className="w-full mt-10 h-10 rounded-md bg-primary-button hover:opacity-80"
      >
        Log in
      </button>
    </Form>
  );
};

interface LoginFromProps {}

const LoginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const LoginForm = withFormik<LoginFromProps, LoginFormValues>({
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: LoginFormValidationSchema,
  handleSubmit: async (values) => {
    // const navigate = useNavigate();
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/wrong-password") {
          toast.error("Email or password is wrong");
        } else {
          toast.error("Something went wrong try again later");
        }

        console.log(errorCode, errorMessage);
      });
  },
})(innerLoginForm);

export default LoginForm;
