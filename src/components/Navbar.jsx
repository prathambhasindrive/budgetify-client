import React from "react";
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <nav className="bg-gray-400 w-full h-12 flex items-center ">
      <div className="flex w-full justify-between items-center">
        <div className="text-white font-bold mx-2 my-1 text-2xl cursor-pointer">Budgetify</div>
        <ul className="hidden md:flex border-box">
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <Link to="/">Home</Link>
          </li>
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div>
          <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500 hidden md:inline ">
            <link to="/signup">Sign Up</link>
          </button>
          <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500  md:inline">
            <link to="login">Log In</link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
