import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

function Post() {
  return (
    <div className=" p-4 bg-fourth w-full container mt-4 rounded-md">
      <header className="flex justify-between gap-2  items-center ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-third  rounded-full">
            <AiOutlineUser />
          </div>
          <h2 className="text-secondary font-semibold">Milan Prajapati</h2>
        </div>
        <div className="flex gap-8">
          <AiOutlineEdit className=" scale-150 text-primary" />
          <AiOutlineDelete className=" scale-150 text-primary" />
        </div>
      </header>
      <body className="mt-4">
        <p className="text-primary">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          commodi harum consequuntur impedit nemo ipsum quas earum, odit nostrum
          exercitationem repellat debitis in ea, non corporis ab minus similique
          corrupti ducimus? Temporibus, minima! Sed totam sapiente ipsam magni,
          modi numquam veritatis! Doloribus sunt laboriosam vero, id aperiam ex
          alias, veniam culpa, explicabo dicta rem minima pariatur veritatis
          numquam facilis tenetur!
        </p>
      </body>
      <footer className="flex justify-end">
        <AiOutlineHeart className="text-primary scale-150" />
      </footer>
    </div>
  );
}

export default Post;
