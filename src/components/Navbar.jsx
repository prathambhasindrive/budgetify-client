import React from "react";
import {Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ isOpen, toggleMenu }) => {
  

  return (
    <>
      <nav className="bg-gray-400 w-full h-12 flex items-center ">
        <div className="flex w-full justify-between items-center">
          <div className="text-white font-bold mx-2 my-1 text-2xl cursor-pointer">
            <Link exact to="/">Budgetify</Link>
          </div>

          <ul className="hidden md:flex border-box">
            <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
              <NavLink exact to="/" >Home</NavLink>
            </li>
            <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
              <NavLink to="/services" >Services</NavLink>
            </li>
            <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
              <NavLink to="/about" >About Us</NavLink>
            </li>
            <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
              <NavLink to="/contact" >Contact Us</NavLink>
            </li>
          </ul>

          <div>
            <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500 hidden md:inline ">
              <Link to="/signup" >Sign Up</Link>
            </button>
            <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500 hidden  md:inline">
              <Link to="login" >Log In</Link>
            </button>
            <button
              className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500   md:hidden "
              onClick={toggleMenu}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="menu md:hidden h-screen w-full bg-gray-400 flex items-start justify-center px-4 py-4 text-white text-4xl text-center border-t-2 border-t-white">
          <ul>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink exact to="/" >Home</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/services" >Services</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/about" >About Us</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/contact" >Contact Us</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/signup" >Signup</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/login" >Login</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
