import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import AuthTextInput from "../ui/auth/authInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../services/firebase";
import { useNavigate } from "react-router-dom";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}
const innerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
  return (
    <Form className="mt-10">
      <AuthTextInput label="Name" name="name"></AuthTextInput>
      <AuthTextInput
        label="Email"
        labelClass="mt-4"
        name="email"
      ></AuthTextInput>
      <AuthTextInput
        label="Password"
        labelClass="mt-4"
        name="password"
        type="password"
      ></AuthTextInput>
      <button
        type="submit"
        className="w-full mt-10 h-10 rounded-md bg-primary-button hover:opacity-80"
      >
        Register
      </button>
    </Form>
  );
};

interface RegisterFromProps {}

const RegisterFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(3),
  password: yup.string().required().min(8),
  email: yup.string().required().email(),
});

const RegisterForm = withFormik<RegisterFromProps, RegisterFormValues>({
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  validationSchema: RegisterFormValidationSchema,
  handleSubmit: async (values) => {
    // const navigate = useNavigate();
    const { email, password, name } = values;
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        });

        // navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  },
})(innerRegisterForm);

export default RegisterForm;
