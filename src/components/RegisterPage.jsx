import { Link } from "react-router-dom";
// import { useState } from "react";
import { useFormik } from "formik";
import { mySchema } from "../schemas";
import "../layouts/noti.css";
import Submit from "../layouts/Submit";
// import { createContext } from "react";
import axios from "axios";
import Header from "./Header";

function RegisterPage() {
  const initialFormValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //   const [formValue, setFormValue] = useState(initialFormValue);
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialFormValue,
    validationSchema: mySchema,
    onSubmit: (values, actions) => {
      console.log("submitted");
      console.log(values);
      console.log(actions);
      const newRegister = {
        // fullname: values.fullname,
        userName: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      // fetch("http://localhost:8000/users", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newRegister),
      // });
      axios
        .post("http://localhost:8000/api/user/register", newRegister)
        .then((res) => {
          console.log(res);
          console.log("done");
        })
        .then((err) => console.log(err));
      actions.resetForm();
    },
  });
  console.log(values);
  console.log(isSubmitting);
  console.log(errors);
  //   console.log(formik);
  //   const handleSubmit = (e) => {
  //     const newRegister = {};
  //     e.preventDefault();
  //   };

  //   const handleChange = (e) => {
  //     setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //   };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="h-full w-full flex items-center justify-center mt-[10%]">
          <div className="border-2 p-4 rounded-2xl border-fuchsia-700   flex items-center justify-center">
            {/* <h2>Register Here</h2> */}
            <div>
              <h2 className=" font-mono text-2xl text-blue-200 font-bold mb-6">
                Register Here
              </h2>

              <div className="flex flex-col space-y-2 font-mono text-lg ">
                <label htmlFor="name">Username</label>
                <input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  className="rounded-md p-1 "
                  type="text"
                  name="username"
                  id="username"
                />
                {errors.username && touched.username && (
                  <span className="text-red-500 text-sm italic py-1">
                    {errors.username}
                  </span>
                )}{" "}
              </div>
              <div className="flex flex-col space-y-2 font-mono text-lg ">
                <label htmlFor="name">Email</label>
                <input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  className="rounded-md  p-1"
                  type="email"
                  name="email"
                  id="email"
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 text-sm italic py-1">
                    {errors.email}
                  </span>
                )}{" "}
              </div>
              <div className="flex flex-col space-y-2 font-mono text-lg ">
                <label htmlFor="name">Password</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="rounded-md p-1 "
                  type="password"
                  name="password"
                  id="password"
                />
                {errors.password && touched.password && (
                  <span className="text-red-500 text-sm italic py-1">
                    {errors.password}
                  </span>
                )}{" "}
              </div>
              <div className="flex flex-col space-y-2 font-mono text-lg ">
                <label htmlFor="name"> Confirm Password</label>
                <input
                  onChange={handleChange}
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  className="rounded-md p-1 "
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <span className="text-red-500 text-sm italic py-1">
                    {errors.confirmPassword}
                  </span>
                )}{" "}
              </div>
              <Submit
                isSubmitting={isSubmitting}
                // isnotif={isnotif}
                // setIsNotif={setIsNotif}
                values={values}
                handleSubmit={handleSubmit}
              />
              {/* <button
              onSubmit={handleSubmit}
              className="font-mono mt-8 text-white cursor-pointer hover:bg-transparent hover:border-2 hover:text-fuchsia-800 hover:border-fuchsia-900 bg-fuchsia-500 p-2 rounded-md"
              >
              Register
            </button> */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
