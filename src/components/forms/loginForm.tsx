import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import AuthTextInput from "../ui/auth/authInput";
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
  handleSubmit: (values) => {
    console.log(values);
  },
})(innerLoginForm);

export default LoginForm;
