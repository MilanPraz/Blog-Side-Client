import * as yup from "yup";
// const regrex = /^[a-zA-Z0-9_.-]*$/;
export const mySchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(5)
    .max(15)
    .matches(/^[a-zA-Z0-9_.-]*$/, "Please create a strong password")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
