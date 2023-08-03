import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" w-full flex p-4 items-center justify-end">
      <NavLink to={"/login"}>
        <span className=" hover:bg-transparent hover:border-2 hover:text-fuchsia-800 hover:border-fuchsia-900 no-underline text-sm   cursor-pointer text-white p-2  rounded-2xl bg-fuchsia-700">
          Login Here
        </span>
      </NavLink>
    </div>
  );
}

export default Header;
