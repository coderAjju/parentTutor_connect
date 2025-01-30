import {
  BookOpen,
  LayoutDashboard,
  LogOut,
  Menu,
  SidebarCloseIcon,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [variable, setVariable] = useState("");
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (pathname === "/login") {
      setVariable("Signup");
    } else if (pathname === "/signup") {
      setVariable("Login");
    }
  }, []);

  const user = true;
  return (
    <div className=" backdrop-blur-3xl fixed top-0  py-3 w-full z-30">
      <div className="container mx-auto flex gap-3 items-center justify-between w-full">
        {/* logo */}
        <div className="flex gap-2 px-4 md:px-0 items-center z-10">
          <div
            className="md:hidden mb-1 "
            onClick={() => setMenu((prev) => !prev)}
          >
            <Menu size={28} />
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-200">EduTech</span>
          </div>
        </div>

        {/* desktop nav links */}
        <div className="gap-4 items-center flex lg:px-0 px-5">
          <ul className="md:flex hidden gap-3 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary hover:bg-gray-700 p-[9px] transition-all duration-200 rounded-lg"
                    : "text-base-content hover:bg-gray-700 p-[9px] transition-all duration-200 rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search/tutors"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary hover:bg-gray-700 p-[9px] transition-all duration-200 rounded-lg"
                    : "text-base-content hover:bg-gray-700 p-[9px] transition-all duration-200 rounded-lg"
                }
              >
                Tutors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary hover:bg-gray-700 p-[9px] transition-all duration-200 rounded-lg"
                    : "text-base-content hover:bg-gray-700 p-[9px] transition-all duration-200 rounded-lg"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-2"
                >
                  <li>
                    <Link to={"/parent/dashboard"}>
                      {" "}
                      <LayoutDashboard /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to={""}>
                      {" "}
                      <LogOut /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : pathname === "/login" ? (
            <Link to={"/signup"}>
              <button className="btn btn-accent">Sign up</button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-accent">Login</button>
            </Link>
          )}
        </div>

        {/* mobile nav links */}
        <div
          className={`gap-4 items-center md:hidden h-screen fixed top-0 p-7 bg-gray-700 sm:w-[60%] w-full ${
            menu ? "left-0" : "-left-[100vw]"
          } transition-all duration-200`}
        >
          <X onClick={() => setMenu((prev) => !prev)} />
          <div className="w-full h-[80%]  flex justify-center items-center">
            <ul className="flex flex-col gap-8">
              <li onClick={() => setMenu((prev) => !prev)} className="p-[9px]">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li onClick={() => setMenu((prev) => !prev)} className="p-[9px]">
                <NavLink to={"/search/tutors"}>Tutors</NavLink>
              </li>
              <li onClick={() => setMenu((prev) => !prev)} className="p-[9px]">
                <NavLink to={"/about"}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
