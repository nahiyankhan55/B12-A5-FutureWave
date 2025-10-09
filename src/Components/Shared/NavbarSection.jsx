import { FaBars, FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import webLogo from "/logo.png";

const NavbarSection = () => {
  return (
    <div className="flex items-center gap-5 py-5 max-w-[1440px] mx-auto bg-white shadow-md fixed z-50 w-full lg:px-14 md:px-10 px-5 justify-between">
      <div className="flex items-center gap-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <FaBars className="text-xl"></FaBars>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-purple-700 duration-300 py-1 px-5 border-b-2"
                  : "hover:text-purple-600 text-gray-700 duration-300 py-1 px-3 hover:bg-purple-50 rounded-lg"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-purple-700 duration-300 py-1 px-5 border-b-2"
                  : "hover:text-purple-600 text-gray-700 duration-300 py-1 px-3 hover:bg-purple-50 rounded-lg"
              }
              to={"/apps"}
            >
              Apps
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-purple-700 duration-300 py-1 px-5 border-b-2"
                  : "hover:text-purple-600 text-gray-700 duration-300 py-1 px-3 hover:bg-purple-50 rounded-lg"
              }
              to={"/installation"}
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <Link className="flex items-center gap-1 group" to={"/"}>
          <img
            className="sm:h-10 h-8 group-hover:rotate-90 duration-300 transition"
            src={webLogo}
            alt="header-logo"
          />
          <span className="text-xl font-bold sm:flex hidden group-hover:text-cyan-700 text-purple-700 duration-300 transition">
            FutureWave
          </span>
        </Link>
      </div>
      <div className="md:flex hidden items-center gap-2 font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 duration-300 py-1 px-3 border-b-2"
              : "hover:text-purple-600 text-gray-700 duration-300 py-1 px-3 hover:bg-purple-50 rounded-lg"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 duration-300 py-1 px-3 border-b-2"
              : "hover:text-purple-600 text-gray-700 duration-300 py-1 px-3 hover:bg-purple-50 rounded-lg"
          }
          to={"/apps"}
        >
          Apps
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 duration-300 py-1 px-3 border-b-2"
              : "hover:text-purple-600 text-gray-700 duration-300 py-1 px-3 hover:bg-purple-50 rounded-lg"
          }
          to={"/installation"}
        >
          Installation
        </NavLink>
      </div>
      <a
        className="py-2 sm:px-4 px-3 rounded-md bg-gradient-to-br from-purple-700 via-purple-700 to-purple-400 flex items-center gap-1 font-semibold sm:text-lg text-xs text-white hover:scale-105 duration-300 hover:from-purple-900 hover:to-pink-500 transition"
        href="https://github.com/nahiyankhan55"
        target="_blank"
      >
        <FaGithub className="sm:text-xl text-lg"></FaGithub>Contribution
      </a>
    </div>
  );
};

export default NavbarSection;
