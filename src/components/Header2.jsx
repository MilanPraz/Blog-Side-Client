// import AiOutlineHeart from react-icons
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";

function Header2() {
  return (
    <nav className="  bg-fourth py-2">
      <div className="flex justify-between items-center container">
        <span className=" text-2xl font-bold text-secondary">Kura-Kani</span>
        <div className="flex gap-2">
          <span className=" bg-third p-1.5 rounded-full ">
            <AiOutlineBell />
          </span>
          <span className=" bg-third p-1.5 rounded-full ">
            <AiOutlineUser />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header2;
