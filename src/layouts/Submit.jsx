import "./noti.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";
import Loader from "./Loader";

function Submit({ values, handleSubmit, isSubmitting }) {
  console.log(values);
  console.log(isSubmitting);
  const navigate = useNavigate();
  const { isnotif, setIsNotif } = useContext(MyContext);
  isnotif &&
    setTimeout(() => {
      navigate("/thankyou");
      setIsNotif(false);
    }, 200);

  console.log(isnotif);
  return (
    <div className="mx-auto w-full text-center mt-8">
      {/* <div id="notif" className={isnotif ? "visible" : ""}>
        {" "}
        Registered Successfully!!!
      </div> */}

      {/* <Link to={"/thankyou"}> */}
      <button
        type="submit"
        id="hoverme"
        disabled={isSubmitting ? true : false}
        onClick={values.password === "" ? null : () => setIsNotif(!isnotif)}
        onSubmit={handleSubmit}
        className="font-mono text-white cursor-pointer hover:bg-transparent hover:border-2 hover:text-fuchsia-800 hover:border-fuchsia-900 bg-fuchsia-500 p-2 rounded-md"
      >
        Register
      </button>
      {/* </Link> */}
    </div>
  );
}
export default Submit;
