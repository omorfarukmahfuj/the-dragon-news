import React from 'react';
import userDefaultPic from "../../assets/user.png";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/'>About</NavLink></li>
    <li><NavLink to='/'>Career</NavLink></li>
  </>
  return (
    <nav className="navbar bg-base-100 mt-3 md:mt-5 mb-6 md:mb-16 justify-between">
      {/* Navbar Start */}
      <div className="navbar-start md:hidden md:w-2/4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center flex-grow justify-center hidden lg:flex">
        <ul className="menu-horizontal gap-10 text-[#706F6F]">
          {navLinks}
        </ul>
      </div>


      {/* Navbar End */}
      <div className="navbar-end w-auto">

        {/* User Profile */}
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={userDefaultPic} />
          </div>
        </div>

        <a className="btn btn-sm px-10 h-10 ml-10 bg-[#403F3F] text-white rounded-none">
          <Link>
            <button>Login</button>
          </Link>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;