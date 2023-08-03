import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Loader from "../layouts/Loader";

function LoginPage() {
  const [myemail, setEmail] = useState("");
  const [mypassword, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  function handleLogin() {
    const newLogin = {
      email: myemail,
      password: mypassword,
    };
    axios
      .post("http://localhost:8000/api/user/login", newLogin)
      .then((res) => res.status == 200 && setStatus(true))
      .then((err) => console.log(err));
  }
  console.log(status);
  const navigate = useNavigate();
  // useEffect(() => {
  //   status && navigate("/home");
  // }, [status]);

  setTimeout(
    () => status && navigate("/home"),

    400
  );
  return (
    <>
      <Header />
      {status && <Loader />}
      <div className="h-full w-full flex items-center justify-center mt-[20%]">
        <div className="border-2 p-4 rounded-2xl border-fuchsia-700  w-[50%] flex items-center justify-center">
          {/* <h2>Register Here</h2> */}
          <div>
            <h2 className="font-mono text-2xl text-blue-200 font-bold mb-6">
              Login Here
            </h2>

            <div className="flex flex-col space-y-2 font-mono text-lg ">
              <label htmlFor="name">Email</label>
              <input
                value={myemail}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md "
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col space-y-2 font-mono text-lg ">
              <label htmlFor="password">Password</label>
              <input
                value={mypassword}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md "
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="mx-auto w-full text-center mt-8">
              <button
                type="submit"
                onClick={() => handleLogin()}
                className="font-mono text-white cursor-pointer hover:bg-transparent hover:border-2 hover:text-fuchsia-800 hover:border-fuchsia-900 bg-fuchsia-500 p-2 rounded-md"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
