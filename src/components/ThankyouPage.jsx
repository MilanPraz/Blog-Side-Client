import { useState, useContext } from "react";
import "../layouts/noti.css";
import { MyContext } from "../App";
import Loader from "../layouts/Loader";
import Header from "./Header";

function ThankyouPage() {
  // const { isnotif, setIsNotif } = useContext(MyContext);

  const [ison, setIsOn] = useState(true);
  setTimeout(() => {
    setIsOn(false);
  }, 1000);
  return (
    <>
      <Header />
      <div id="notif" className={"visible"}>
        Registered Successfully!!!
      </div>
      {ison && <Loader />}
      <div className="h-full w-full flex items-center justify-center mt-[20%]">
        <div className="border-2 p-4 rounded-2xl border-fuchsia-700  w-[50%] flex items-center justify-center">
          {/* <h2>Register Here</h2> */}
          <div>
            <h2 className="font-mono text-2xl text-blue-200 font-bold mb-6">
              Thankyou for Registering
            </h2>
            <p className="font-mono text-center text-sm text-blue-200 font-bold mb-6">
              Please Login to continue
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankyouPage;
