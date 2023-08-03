import { AiOutlineUser } from "react-icons/ai";
import DialogBox from "./DialogBox";
import { useState } from "react";

function FormPart({ toggle, setToggle }) {
  function handlePost() {
    setToggle((tog) => !tog);
  }

  return (
    <>
      {" "}
      {toggle && <DialogBox setToggle={setToggle} />}
      <section className="flex p-4 container rounded-lg  shadow-fourth mt-4 bg-fourth">
        <span className=" bg-third p-3 rounded-full ">
          <AiOutlineUser />
        </span>
        <input
          type="text"
          onClick={handlePost}
          className="bg-third cursor-pointer placeholder:text-fourth placeholder:p-2  ml-2 rounded-2xl w-full"
          placeholder="What's on your mind,Milan?"
        ></input>
      </section>
    </>
  );
}

export default FormPart;
