import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
function DialogBox({ setToggle }) {
  return (
    <div className=" absolute h-[100vh] w-full  bg-third bg-opacity-70 flex items-center justify-center">
      <div className="bg-fourth rounded-md container  w-2/3 h-96">
        <div className="flex items-center justify-between mb-2">
          <h2 className=" font-semibold text-xl text-secondary  ">
            Create post
          </h2>

          <span
            onClick={() => setToggle((tog) => !tog)}
            className="text-primary "
          >
            <MdOutlineCancel className=" scale-150" />
          </span>
        </div>
        <div className="h-[1px] bg-primary"></div>

        <div className="flex justify-start gap-4 items-center mt-6">
          <div className="pl-3">
            <div className="p-2 bg-third  rounded-full">
              <AiOutlineUser />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-secondary">
              Milan Prajapati
            </span>
            <select
              id="visible"
              className="bg-third rounded-md px-2 text-secondary "
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div className="bg-red h-1/2 my-4 mx-3">
          <textarea
            type="text"
            className="text-secondary resize-none text-start rounded-md bg-fourth h-full   border-none w-full outline-none "
          ></textarea>
          <div>
            <button className="rounded-md py-1.5  w-full bg-third">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
